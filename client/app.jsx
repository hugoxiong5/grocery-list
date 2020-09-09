"use strict";

const ListItem = (props) => <li>{props.item}</li>;

const List = (props) => (
  <ul>
    {props.list.map((item, index) => {
      return <ListItem key={index} item={item} />;
    })}
  </ul>
);

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
      },
      error: () => {
        console.log("ajax error");
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

// _handleChange(event) {
//   this.setState({
//     [event.target.name]: event.target.value
//   }, () => {
//     this._getTotal(this.state.unitPrice, this.state.quantity);
//   });
// }
