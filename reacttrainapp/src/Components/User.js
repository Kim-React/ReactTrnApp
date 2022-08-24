import React, { useState } from 'react'

export default function User() {
    const [name,setName] = useState({firstName:'Elon', lastName:'Musk'})
  return (
    <div>
        <h1>{name.firstName}</h1> : <h1>{name.lastName}</h1>
    </div>
  )
}
