import React ,{useState}from 'react'

export default function HookCounter() {
    const [count,setCount] = useState(0);
    function updateCounter(){
        setCount(count+1);
    }
  return (
    <div>
        <h1>counter value :{count}</h1>
      <button onClick={updateCounter}>increment counter</button>
    </div>
  )
}
