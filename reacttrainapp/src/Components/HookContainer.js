import React,{useState} from 'react'
import HookMouse from './HookMouse'

function HookContainer() {
    const [display, setDisplay] = useState(true)
  return (
    <>
    <div>
        <button onClick={()=> setDisplay(!display)} >ToggleDisplay</button>
    </div>

    <div>
        {display && <HookMouse/>}
    </div>
    </>
  )
}

export default HookContainer