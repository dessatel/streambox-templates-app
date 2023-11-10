import React, { useState } from 'react';

import TableSessions from './TableSessions';
import TableDecoders from './TableDecoders';
import TablePorts from './TablePorts';
import TableStreams from './TableStreams';
import TableDataUsage from './TableDataUsage';

function ServerControl(props) {

    let show0 = (props.tableset & 1) === 1;
    let show1 = (props.tableset & 2) === 2;
    let show2 = (props.tableset & 4) === 4;
    let show3 = (props.tableset & 8) === 8;
    let show4 = (props.tableset & 16) === 16;

    let login = props.login;
    let password = props.password;

    const PREFIX = "https://" + props.server + "/light/";
    const POSTFIX = "?login="+login+"&hashedPass="+password;

	const DATA_USAGE_URL = PREFIX + 'xmlDataUsage.php' + POSTFIX;
	const DECODERS_URL = PREFIX + 'xmlGetDecoders.php' + POSTFIX;
	const SESSIONS_URL = PREFIX	+ 'xmlGetSessions.php' + POSTFIX;
	const PORTS_URL = PREFIX + 'xmlIncomingPorts.php' + POSTFIX;
	const STREAMS_URL = PREFIX + 'xmlStreams.php' + POSTFIX;

    return (
        <div className='ServerControl'>
        	<h3>Streambox Light Server</h3>

			{ show0 &&
				<div>
					<h4>Available Encoder/Decoder Session IDs:</h4>
		            <TableSessions url={SESSIONS_URL} />
	            </div>
            }

			{ show1 &&
				<div>
		   			<h4>Streaming to Decoders:</h4>
		            <TableDecoders url={DECODERS_URL} />
				</div>
			}

			{ show2 &&
				<div>
					<h4>Incoming ports:</h4>
		            <TablePorts url={PORTS_URL} />
				</div>
            }

			{ show3 &&
				<div>
					<h4>Streams info:</h4>
    		        <TableStreams url={STREAMS_URL} />
				</div>
            }

   			{ show4 &&
				<div>
					<h4>Data Usage Records:</h4>
		            <TableDataUsage url={DATA_USAGE_URL} />
				</div>
	        }

        </div>
    );
}

export default ServerControl;
