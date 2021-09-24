import React, { Component } from "react";
import { data } from "./mock";

class App extends Component {
  state = {
    list: data,
    name: "",
    status: "",
    selected: null,
  };
  render() {
    const onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };

    const onSelect = (e) => {
      this.setState({
        selected: e.id,
        name: e.name,
        status: e.status,
      });
    };

    const onSave = () => {
      let newdata = this.state.list.map((value) =>
        value.id === this.state.selected
          ? { ...value, name: this.state.name, status: this.state.status }
          : value
      );
      this.setState({
        selected: null,
        list: newdata,
      });
    };

    const onDelete = (e) => {
      let data = this.state.list.filter((item) => item.id !== e.id);
      this.setState({
        list: data,
      });
    };

    return (
      <table
        border="1"
        style={{
          borderCollapse: "collapse",
          width: "70%",
          margin: "100px auto",
        }}
      >
        <thead>
          {/* <tr><th><button>add</button></th></tr> */}
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.state.list.map((value) => (
            <tr>
              <td>{value.id}</td>
              <td>
                {this.state.selected === value.id ? (
                  <input
                    type="text"
                    onChange={onChange}
                    name="name"
                    value={this.state.name}
                  />
                ) : (
                  value.name
                )}
              </td>
              <td>
                {this.state.selected === value.id ? (
                  <input
                    type="text"
                    onChange={onChange}
                    name="status"
                    value={this.state.status}
                  />
                ) : (
                  value.status
                )}
              </td>
              <td>
                {this.state.selected === value.id ? (
                  <button onClick={onSave}>save</button>
                ) : (
                  <button onClick={() => onSelect(value)}>edit</button>
                )}
                <button onClick={() => onDelete(value)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default App;
