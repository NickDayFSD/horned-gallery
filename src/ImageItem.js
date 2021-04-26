import React, { Component } from 'react';

class HornedItem extends Component {

  render() {
    const horned = this.props.horned;

    return (
      <li className='HornedItem'>
        <h2>{horned.name}</h2>
        <img src={horned.url} alt={horned.description} />
        <p>Horn Count: {horned.horns}</p>
      </li>
    );
  }
}

export default HornedItem;
