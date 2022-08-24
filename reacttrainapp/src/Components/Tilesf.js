import React, { useState } from 'react'

export default function Tilesf() {

 
 const  initialTiles =[
        {"name":"somany","model":"nit-01","price":200},
        {"name":"johnson","model":"nit-02","price":100},
        {"name":"hsil","model":"nit-03","price":150},
        {"name":"clayhaus","model":"nit-04","price":350}
      ]
      const [tiles,setTiles] = useState(initialTiles);

      
  return (
    <div>
            <table>
                <thead>
                    <tr>
                        <td>name</td>
                        <td>model</td>
                        <td>price</td>
                    </tr>
                </thead>
            {tiles.map((tile,index) => {
            
            return (
             <tr key={index}>
              <td>{tile.name}</td>
             <td>{tile.model}</td>
             <td>{tile.price}</td>
            </tr>)
                    
      }    
      )
    }
       </table>
    </div>
  )
}
