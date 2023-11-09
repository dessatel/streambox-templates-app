import React, { useState, useEffect } from 'react';
import xmlJs from 'xml-js';

function TableSessions({ url }) {
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
      let items = data.body.sessions.item;
      if (!Array.isArray(items)) {
        // If there's only one item, wrap it in an array
        items = items ? [items] : [];
      }


	const p = items.map((dataitem, index) => ({
			index: index + 1,
            name: dataitem._attributes.Name,
            encoder: dataitem._attributes.Encoder,
            decoder: dataitem._attributes.Decoder,
            live: dataitem._attributes.Live,
            ports: dataitem._attributes.Ports,
            created: dataitem._attributes.Created,
            expires: dataitem._attributes.Expires,
            params: dataitem._attributes.Params
          }));

return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>NAME</th>
          <th>Encoder</th>
          <th>Decoder</th>
          <th>Live</th>
          <th>Ports</th>
          <th>Created</th>
          <th>Expires</th>
          <th>Params</th>
        </tr>
      </thead>
      <tbody>
        {p.map((dataitem, index) => (
          <tr key={index}>
          	<td>{dataitem.index}</td>
            <td>{dataitem.name}</td>
            <td>{dataitem.encoder}</td>
            <td>{dataitem.decoder}</td>
            <td>{dataitem.live}</td>
            <td>{dataitem.ports}</td>
            <td>{dataitem.created}</td>
            <td>{dataitem.expires}</td>
            <td>{dataitem.params}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableSessions;
