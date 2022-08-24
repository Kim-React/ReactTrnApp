import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
increment(){
    // this.setState({
    //     count : this.state.count + Number(this.props.incrementValue)
    // });
    this.setState((prevState)=>({
        count:prevState.count + Number(this.props.incrementValue)
    }))
}

incrementFive(){
    this.increment();
    this.increment();
    this.increment();
    this.increment();
}
  render() {
    return (
        <>
      <div>counter value {this.state.count}</div>
      <button onClick={()=>this.incrementFive()}>increment</button>
      </>
    )
  }
}
