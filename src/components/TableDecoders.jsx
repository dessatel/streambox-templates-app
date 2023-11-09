import React, { useState, useEffect } from 'react';
import xmlJs from 'xml-js';

function TableDecoders({ url }) {
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

      let items = data.body.decoders.item;
      if (!Array.isArray(items)) {
        // If there's only one item, wrap it in an array
        items = items ? [items] : [];
      }


	const p = items.map((dataitem, index) => ({
			index: index + 1,
            inport: dataitem._attributes.inport,
            sid: dataitem._attributes.sid,
            srvport: dataitem._attributes.srvport,
            bitrate: dataitem._attributes.bitrate,
            lastactive: dataitem._attributes.lastactive,
            max_timeout: dataitem._attributes.max_timeout,
            total: dataitem._attributes.total,
            total_to: dataitem._attributes.total_to,
            percent: dataitem._attributes.percent,
            rtt: dataitem._attributes.rtt,
            rtt_avg: dataitem._attributes.rtt_avg,
            rtt_peak: dataitem._attributes.rtt_peak,
            act_to: dataitem._attributes.act_to
          }));

return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>sid</th>
          <th>server</th>
          <th>port</th>
          <th>bitrate</th>
          <th>last active, s</th>
          <th>max timeout, s</th>
          <th>Packets</th>
          <th>Resent</th>
          <th>%</th>
          <th>RTT</th>
          <th>Avg</th>
          <th>Peak</th>
          <th>Ack timeout</th>
        </tr>
      </thead>
      <tbody>
        {p.map((dataitem, index) => (
          <tr key={index}>
          	<td>{dataitem.index} </td>
            <td>{dataitem.inport}</td>
            <td>{dataitem.sid}</td>
            <td>{dataitem.srvport}</td>
            <td>{dataitem.bitrate}</td>
            <td>{dataitem.lastactive}</td>
            <td>{dataitem.max_timeout}</td>
            <td>{dataitem.total}</td>
            <td>{dataitem.total_to}</td>
            <td>{dataitem.percent}</td>
            <td>{dataitem.rtt}</td>
            <td>{dataitem.rtt_avg}</td>
            <td>{dataitem.rtt_peak}</td>
            <td>{dataitem.act_to}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableDecoders;