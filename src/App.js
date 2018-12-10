import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({value: event.target.value});
  }
  handleSubmit(event){
    alert('A name was submitted:' + this.state.value);
    event.preventDefault();
  }
  render() {
    
    return (
      <div className="App">
        <h1>welcome</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Name:<input type="text" value={this.state.value} onChange={this.handleChange} name="name" />
          </label>
          <input type='submit' value="submit" />
          </form>
      </div>
    );
  }
}

export default App;
