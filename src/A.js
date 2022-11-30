import React, { useState } from 'react'
import B from './B'

const A = () => {
  const [first, setfirst] = useState("kalyani");
  
  return (
    <div>
      <B name={first}/>
    </div>
  )
}

export default A;
