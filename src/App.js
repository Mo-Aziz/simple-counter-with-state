import React, { Component } from "react";
import "./styles.css";


class App extends Component{
  constructor(){
    super()
this.state={
  count: 0
}

this.handleIncriment=this.handleIncriment.bind(this)
this.handleDecrment=this.handleDecrment.bind(this)
  }
handleIncriment(){
  this.setState(prevState =>{return {count: prevState.count + 1}})
}

handleDecrment(){
this.setState(prevState => {return {count :prevState.count - 1}})
}
render(){
  return(
<div>
<h1>{this.state.count}</h1>
<button onClick={this.handleIncriment}> increase </button>
<button onClick={this.handleDecrment}> decrease </button>
</div>
  )
}
}
 export default App