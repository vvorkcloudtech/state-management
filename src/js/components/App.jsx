import React, { Component } from "react";

class App extends Component {
  state = {
    value: "",
    task: []
  };
  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  handleSubmit = (e, v) => {
    e.preventDefault();
    // console.log(v);
    this.setState({
      task: [...this.state.task, this.state.value],
      value: ""
    });
  };
  handleDelete = index => {
    console.log("handle delete clicked", this.state.task[index]);
    let task = this.state.task;
    task.splice(index, 1);

    this.setState({
      task: task
    });
  };
  handleMoveUp = index => {
    if (index == 0) {
      alert("sorry");
    } else {
      let task = this.state.task;
      let temp = task[index];
      task[index] = task[index - 1];
      task[index - 1] = temp;
      this.setState({
        task: task
      });
    }
  };
  handleMoveDown = index => {
    if (index == this.state.task.length - 1) {
      alert("sorry");
    } else {
      let task = this.state.task;
      let temp = task[index];
      task[index] = task[index + 1];
      task[index + 1] = temp;
      this.setState({
        task: task
      });
    }
  };
  render() {
    console.log(this.state);
    let response = this.state.task.map((task, index) => {
      return (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{task}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => this.handleDelete(index)}
            >
              DELETE
            </button>
            <button className="btn btn-info">EDIT</button>
            <button
              className="btn btn-success"
              onClick={() => this.handleMoveUp(index)}
            >
              MOVE-UP
            </button>
            <button
              className="btn btn-success"
              onClick={() => this.handleMoveDown(index)}
            >
              MOVE-DOWN
            </button>
          </td>
        </tr>
      );
    });
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          TASK:{" "}
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button>ADD TASK</button>
        </form>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Task</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>{response}</tbody>
        </table>
      </div>
    );
  }
}
export default App;
