import React ,{useState}from 'react'

export default function HookCounterTwo() {
    const initialState = 0;
    const [count,setCount] = useState(initialState);
  
  return (
    <div>
        <h1>counter value :{count}</h1>
      <button onClick={()=> setCount(initialState)}>reset </button>
      <button onClick={()=> setCount(count+1)}>increment </button>
      <button onClick={()=> setCount(count-1)}>decrement </button>
    </div>
  )
}
