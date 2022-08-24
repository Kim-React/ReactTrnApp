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
        count : this.state.count + Number(this.props.incrementValue)
    });
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
