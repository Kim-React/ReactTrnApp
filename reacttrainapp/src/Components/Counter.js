import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
increment(){
    this.setState({
        count : this.state.count +1
    });
    //this.state.count = this.state.count +1 ;// does not reflect in
}

  render() {
    return (
        <>
      <div>counter value {this.state.count}</div>
      <button onClick={()=>this.increment()}>increment</button>
      </>
    )
  }
}
