import React, { Component } from 'react';

class ImageItem extends Component {

  render() {
    const image = this.props.image;

    return (
      <li className='HornedItem'>
        <h2>{image.name}</h2>
        <img src={image.url} alt={image.description} />
        <p>Horn Count: {image.horns}</p>
      </li>
    );
  }
}

export default ImageItem;
