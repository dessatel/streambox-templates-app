import React from 'react';
import TableSessions from './components/TableSessions.jsx';
import TableDecoders from './components/TableDecoders.jsx';
import TablePorts from './components/TablePorts.jsx';
import TableStreams from './components/TableStreams.jsx';
import TableDataUsage from './components/TableDataUsage.jsx';

import './App.css';

const USER_PASS = '?login=admin&hashedPass=fe01ce2a7fbac8fafaed7c982a04e229';
  
const DATA_USAGE_URL = 'https://tl3.streambox.com/light/xmlDataUsage.php' + USER_PASS;
const DECODERS_URL = 'https://tl3.streambox.com/light/xmlGetDecoders.php' + USER_PASS;
const SESSIONS_URL = 'https://tl3.streambox.com/light/xmlGetSessions.php' + USER_PASS;
const PORTS_URL = 'https://tl3.streambox.com/light/xmlIncomingPorts.php' + USER_PASS;
const STREAMS_URL = 'https://tl3.streambox.com/light/xmlStreams.php' + USER_PASS;

//const xmlGetSessions.php

/*

*/


function App() {
    return (
        <div className='App'>

        	<h3>Streambox Light Server</h3>

			<h4>Available Encoder/Decoder Session IDs:</h4>
            <TableSessions url={SESSIONS_URL} />

   			<p/><h4>Streaming to Decoders:</h4>
            <TableDecoders url={DECODERS_URL} />

			<p/><h4>Incoming ports:</h4>
            <TablePorts url={PORTS_URL} />

			<p/><h4>Streams info:</h4>
            <TableStreams url={STREAMS_URL} />

			<p/><h4>Data Usage Records:</h4>
            <TableDataUsage url={DATA_USAGE_URL} />

        </div>
    );
}

export default App;
