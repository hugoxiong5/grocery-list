import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

import List from "./components/list.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      itemToAdd: "",
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  _handleSubmit(e) {
    e.preventDefault();
    console.log("You submitted the form!");

    const updatedList = this.state.list.slice();
    updatedList.push(this.state.itemToAdd);

    $.ajax({
      url: "/list",
      method: "POST",
      data: { data: this.state.itemToAdd },
      success: () => {
        console.log("ajax success");
        this.setState({
          itemToAdd: "",
        });
        this._retrieve();
      },
      error: () => {
        console.error("AJAX POST error");
      },
    });
  }

  _retrieve() {
    $.ajax({
      url: "/list",
      method: "GET",
      success: (data) => {
        this.setState({
          list: data,
        });
      },
      error: () => {
        console.error("AJAX GET error");
      },
    });
  }

  render() {
    return (
      <div>
        <h1>Grocery List</h1>
        <List list={this.state.list} />
        <form onSubmit={this._handleSubmit}>
          <label>
            Cart:{" "}
            <input
              type="text"
              name="itemToAdd"
              value={this.state.itemToAdd}
              onChange={this._handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
