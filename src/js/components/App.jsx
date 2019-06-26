import React, { Component } from "react";
import data from "./data";
class App extends Component {
  state = {
    counter: 1,
    show: true,
    data: data
  };
  handleAdd = () => {
    console.log("add function runs ", this.state.counter);

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
    let response = this.state.data.map((item, index) => {
      return (
        <div key={index}>
          <p className="name">Name: {item.name}</p>
          <p>Age: {item.age}</p>
          <div>
            Qualification<h1>{item.qualification.graduation}</h1>
            adress: <h1>{item.address}</h1>
            email: <h3>{item.email}</h3>
            contact: <h4>{item.contact}</h4>
            <img src={`{item.img}`} alt="" />
            Skills
            <h5>
              {item.skills.map((skill, index) => {
                return <p key={index}> {skill}</p>;
              })}{" "}
            </h5>
          </div>
        </div>
      );
    });
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
        {response}
      </div>
    );
  }
}
export default App;
// class {
//   var
//   functions
// }
