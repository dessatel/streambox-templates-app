import React, { useState, useEffect } from 'react';
import xmlJs from 'xml-js';

function TableDataUsage({ url }) {
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


      let items = data.body.data.item;
      if (!Array.isArray(items)) {
        // If there's only one item, wrap it in an array
        items = items ? [items] : [];
      }


	const p = items.map((dataitem, index) => ({
			index: index + 1,
            ip: dataitem._attributes.ip,
            dataSent: dataitem._attributes.dataSent,
            timeRunning: dataitem._attributes.timeRunning,
            firstActive: dataitem._attributes.firstActive,
            lastActive: dataitem._attributes.lastActive
          }));

return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Data</th>
          <th>Time</th>
          <th>First Active</th>
          <th>Last Active</th>
        </tr>
      </thead>
      <tbody>
        {p.map((dataitem, index) => (
          <tr key={index}>
          	<td>{dataitem.index}</td>
            <td>{dataitem.ip}</td>
            <td>{dataitem.dataSent}</td>
            <td>{dataitem.timeRunning}</td>
            <td>{dataitem.firstActive}</td>
            <td>{dataitem.lastActive}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableDataUsage;
