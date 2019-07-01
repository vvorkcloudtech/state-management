import React, { Component } from "react";
import Users from "./Users";
import Haseeb from "./haseeb";

class App extends Component {
  state = {
    age: 230,
    email: "eemail.com"
  };
  render() {
    const { age, email } = this.state;
    // console.log(this.state.age, this.state.email);
    return (
      <div>
        Hello App
        <Users data={this.state}>
          <Haseeb age={20} />
        </Users>
      </div>
    );
  }
}
export default App;
