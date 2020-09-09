"use strict";
// import List from "./components/list.js";

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
      list: ["hi", "world"],
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(e) {
    console.log("Event happened");
    return setState({

    })

    }
  }

  _handleSubmit() {
    e.preventDefault();
    console.log("You submitted the form!");
  }

  render() {
    return (
      <div>
        <List list={this.state.list} />
        <form onSubmit={this._handleSubmit}>Test</form>
        <label>
          Cart:{' '}
          <input type="text"
          name="list"
          value={this.state.list}
          onChange={this._handleChange} />
        </label>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
