import React, { Component } from 'react';
import './ImageItem.css';

class ImageItem extends Component {

  render() {
    const image = this.props.image;

    return (
      <li className='ImageItem'>
        <h2>{image.title}</h2>
        <img src={image.url} alt={image.description} />
        <p>Horn Count: {image.horns}</p>
      </li>
    );
  }
}

export default ImageItem;
