"use strict";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(e) {
    console.log("Event happened");
  }

  _handleSubmit() {
    console.log("You submitted the form!");
  }

  render() {
    return <div>Test</div>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));