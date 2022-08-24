import React,{useState,useEffect} from 'react'

function HookMouse() {
    const [x,setX] = useState();
    const [y,setY] = useState();
    
    function logMousePosition(e){
        setX(e.clientX);
        setY(e.clientY);

    }

    useEffect(()=>{
        window.addEventListener('mousemove',logMousePosition);
        console.log('useEffectCalled')
    })

  return (
    <div>Mouse Position
        <h1>x position: {x}</h1>
        <h1>y position: {y}</h1>
    </div>
  )
}

export default HookMouse