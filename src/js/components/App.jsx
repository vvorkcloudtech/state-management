import React, { Component } from "react";

class App extends Component {
  state = {
    counter: 1,
    show: true
  };
  handleAdd = () => {
    console.log("add function runs ", this.state.counter);

    // this.state.counter = this.state.counter + 1;
    this.setState({
      counter: this.state.counter + 1
    });
  };
  handleShow = () => {
    this.setState({
      show: !this.state.show
    });
  };
  render() {
    console.log(this.state);
    let counter = 1;
    const handleAdd = () => {
      counter = counter + 1;
      console.log("this is render counter", counter);
    };

    return (
      <div>
        {this.state.show ? (
          <div>
            This is App counter : {this.state.counter}
            this is Render Counter : {counter}
          </div>
        ) : null}
        <br />
        <div>
          <button onClick={this.handleAdd}>ADD</button>
          <button onClick={handleAdd}>Render ADD</button>
          <button onClick={this.handleShow}>Hide/Show</button>
        </div>
      </div>
    );
  }
}
export default App;
// class {
//   var
//   functions
// }
