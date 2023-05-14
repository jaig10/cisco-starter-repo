import React, { useEffect, useState } from 'react'

function DisplayIP(props) {

    const [ip, setIp] = useState();
    const getIP = async ()=>{
        // console.log(props.url);
        const response = await fetch(props.url);
        const data = await response.json();
        setIp(data.ip);
    }
    useEffect(() => {
      getIP();
    }, [])
    

  return (
    <h3>{ip}</h3>
  )
}

export default DisplayIP