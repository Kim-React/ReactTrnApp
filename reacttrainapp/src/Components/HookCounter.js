import React ,{useState}from 'react'

export default function HookCounter() {
    const [count,setCount] = useState(0);
  
  return (
    <div>
        <h1>counter value :{count}</h1>
      <button onClick={()=> setCount(count+1)}>increment counter</button>
    </div>
  )
}
