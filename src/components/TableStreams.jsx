import React, { useState, useEffect } from 'react';
import xmlJs from 'xml-js';

function TableStreams({ url }) {
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

      let items = data.body.streams.item;
      if (!Array.isArray(items)) {
        // If there's only one item, wrap it in an array
        items = items ? [items] : [];
      }


	const p = items.map((dataitem, index) => ({
			index: index + 1,
            encsid: dataitem._attributes.encsid,
            title: dataitem._attributes.title,
            bitrate: dataitem._attributes.bitrate,
            resolution: dataitem._attributes.resolution,
            fps: dataitem._attributes.fps,
            snd: dataitem._attributes.snd,
            ch: dataitem._attributes.ch,
            hw: dataitem._attributes.hw,
            ver: dataitem._attributes.ver,
            ip: dataitem._attributes.ip,
            port: dataitem._attributes.port,
            time: dataitem._attributes.time
          }));

return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Encoder sid</th>
          <th>Title</th>
          <th>Bitrate</th>
          <th>Resolution</th>
          <th>FPS</th>
          <th>Sound</th>
          <th>Channels</th>
          <th>OS</th>
          <th>Version</th>
          <th>IP</th>
          <th>Port</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {p.map((dataitem, index) => (
          <tr key={index}>
          	<td>{dataitem.index} </td>
            <td>{dataitem.encsid}</td>
            <td>{dataitem.title}</td>
            <td>{dataitem.bitrate}</td>
            <td>{dataitem.resolution}</td>
            <td>{dataitem.fps}</td>
            <td>{dataitem.snd}</td>
            <td>{dataitem.ch}</td>
            <td>{dataitem.hw}</td>
            <td>{dataitem.ver}</td>
            <td>{dataitem.ip}</td>
            <td>{dataitem.port}</td>
            <td>{dataitem.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableStreams;
