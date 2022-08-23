import React from 'react';


class TileList extends React.Component{
    
    state  = {
        tile:{name:"somany",model:"nit-01",price:200,rating:2,"status":1}
    }
    render(){
        return (<div> <div>
            {this.state.tile.name}</div>
            <div>
            {this.state.tile.model}
            </div>
            <div>
            {this.state.tile.price}
            </div>
            <div>
            {this.state.tile.status}
            </div>
       </div>);
    }

}

export default TileList;