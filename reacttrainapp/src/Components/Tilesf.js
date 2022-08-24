import React, { useState,useRef } from 'react'

export default function Tilesf() {

    const nameRef = useRef();
    const modelRef = useRef();
    const priceRef = useRef();
 const  initialTiles =[
        {"name":"somany","model":"nit-01","price":200},
        {"name":"johnson","model":"nit-02","price":100},
        {"name":"hsil","model":"nit-03","price":150},
        {"name":"clayhaus","model":"nit-04","price":350}
      ]
      const [tiles,setTiles] = useState(initialTiles);

      function addTile(e){
        e.preventDefault();
        const tile = {
            name:nameRef.current.value,
            model:modelRef.current.value,
            price:modelRef.current.value
        }
        setTiles([...tiles,tile]);
      }
  return (
<>
    <div>
        <form onSubmit={addTile}>
        <div> Name:   <input type="text" ref={nameRef} /> </div>
        <div> Model:   <input type="text" ref={modelRef} /></div>
        <div> Price:   <input type="text" ref={priceRef} /></div>
        <div> <button >Add Tile</button> </div>
        </form>
    </div>
    <div>
            <table>
                <thead>
                    <tr>
                        <td>name</td>
                        <td>model</td>
                        <td>price</td>
                    </tr>
                </thead>
                <tbody>
            {tiles.map((tile,index) => {
            
            return (
             <tr key={index}>
              <td>{tile.name}</td>
             <td>{tile.model}</td>
             <td>{tile.price}</td>
            </tr>
           
            )
      }    
      )
    }
     </tbody>
       </table>
    </div>
    </>
  )
}
