import React, { useState, useEffect } from 'react';
import xmlJs from 'xml-js';

function TablePorts({ url }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const xmlData = await response.text();

        const jsonData = xmlJs.xml2json(xmlData, { compact: true, spaces: 4 });
        setData(JSON.parse(jsonData));

      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

  useEffect(() => {

    fetchData();

    // Set up an interval to fetch data every 10 seconds
    const intervalId = setInterval(() => {
      fetchData();
    }, 10000); // 10000 milliseconds = 10 seconds

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };

  }, [url]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

      let items = data.body.ports.item;
      if (!Array.isArray(items)) {
        // If there's only one item, wrap it in an array
        items = items ? [items] : [];
      }

	const p = items.map((inport, index) => ({
			index: index + 1,
            port: inport._attributes.port,
            encoders: inport._attributes.encoders,
            bitrate_in: inport._attributes.bitrate_in,
            bitrate_out: inport._attributes.bitrate_out,
          }));

return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Port</th>
          <th>Encoders</th>
          <th>Bitrate In</th>
          <th>Bitrate Out</th>
        </tr>
      </thead>
      <tbody>
        {p.map((port, index) => (
          <tr key={index}>
          	<td> {port.index} </td>
            <td>{port.port}</td>
            <td>{port.encoders}</td>
            <td>{port.bitrate_in}</td>
            <td>{port.bitrate_out}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TablePorts;