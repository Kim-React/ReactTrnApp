import React ,{useState}from 'react'

export default function HookCounterTwo() {
    const initialState = 0;
    const [count,setCount] = useState(initialState);

    function increment(){
        setCount(prevState => prevState + 1 )
    }

    function incrementByFive(){
        increment();
        increment();
        increment();
        increment();
    }
  
  return (
    <div>
        <h1>counter value :{count}</h1>
      <button onClick={()=> setCount(initialState)}>reset </button>
      <button onClick={()=> increment()}>increment </button>
      <button onClick={()=> setCount(count-1)}>decrement </button>
      <button onClick={()=> incrementByFive()}>increment by 5 </button>
    </div>
  )
}
