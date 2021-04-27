import { Component } from 'react';
import './Counter.css';

export default class Counter extends Component {

  state = {
    counter: 0,
    name: 'Megan'
  }

  handleClick = () => {
    console.log('CLICKED');
    this.setState({
      counter: this.state.counter + 1
    });
  }

  handleInputChange = ({ target }) => {
    this.setState({
      name: target.value
    });
  }

  render() {
    const { counter, name } = this.state;

    return (
      <div className="Counter">
        <p>Count is: {counter}</p>

        <button onClick={this.handleClick}>+</button>

        <p><input value={name} onChange={this.handleInputChange}></input></p>

        <p>Hello {name}!</p>
      </div>
    );
  }

}