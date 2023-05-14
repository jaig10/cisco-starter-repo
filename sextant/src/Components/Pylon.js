import React, { useEffect, useState } from 'react'
import { w3cwebsocket as W3CWebSocket } from "websocket";
const client = new W3CWebSocket('ws://localhost:55455');

function Pylon() {
    const [latency, setLatency] = useState();

    const getLatency = async()=>{
        client.onmessage = (message) =>{
            const data = new Date().getTime() - message.data;
            console.log(data);
            setLatency(data);
        }
    }

    useEffect(() => {
      getLatency();
    }, [])
    

  return (
    <h3>{latency}</h3>
  )
}

export default Pylon