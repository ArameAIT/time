import React, { useState, useEffect } from 'react'

function Time() {
    const [sec, setSec] = useState(new Date().getSeconds())
    useEffect(()=>{
        setInterval(()=>{
            setSec((prevSec)=> prevSec + 1 )
        }, 1000)
    },[])
  return (
    <div>
       {new Date().toLocaleTimeString()}
    </div>
  )
}

export default Time