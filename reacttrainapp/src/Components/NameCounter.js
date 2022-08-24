import React,{useState,useEffect} from 'react'

export default function NameCounter() {
    const [count,setCount] = useState(2);
    const [name,setName] = useState('john');

    function updateName(e){
        setName(e.target.value);
    }

    function updateCounter(e){
        setCount(count+1);
    }

    useEffect(() => {
       console.log(`effect has ran`);
       document.title = `you clicked ${count} times`;
    },[])
    

  return (
    <>
    <div>
        update name:
        name : <input type="text"  value={name}  onChange={updateName}/>
    </div>
    <div>
        update counter:
        <button onClick={updateCounter}>increment</button>
    </div>
    </>
  )
}
