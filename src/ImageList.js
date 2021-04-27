import React, { Component } from 'react';
import ImageItem from './ImageItem';
import './ImageList.css';

class ImageList extends Component {

  render() {
    const images = this.props.images;

    return (
      <ul className='ImageList'>
        {images.map(image => (
          <ImageItem key={image.title} image={image} />
        ))}
      </ul>
    );
  }
}

export default ImageList;