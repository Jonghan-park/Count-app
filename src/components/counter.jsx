import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1
  };

//   constructor(){
//       super();
//       this.handleIncrement =  this.handleIncrement.bind(this);
//   }

  handleIncrement = () => {
      //console.log('Increment clicked.', this);
      //this.state.count++;
        this.setState({ count: this.state.count + 1 })
    }

    handleDecrement = () => {
        this.setState({ count: this.state.count - 1 })
    }

  render() {
    return (
        <div>
            <span className={this.getAlertClasses()}>{this.formatCount()}</span>
            <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm m-3">Increment</button>
            <button onClick={this.handleDecrement} className="btn btn-secondary btn-sm m-5">Decrement</button>
        </div>

    );

  }

  getAlertClasses(){
      let classes = "alert m-2 alert-";
      classes += this.state.count === 0 ? "warning" : "primary";
      return classes;
  }

  formatCount(){
      const { count } = this.state;
      return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
