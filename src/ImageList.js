import React, { Component } from 'react';
import ImageItem from './ImageItem';

class ImageList extends Component {

  render() {
    const images = this.props.images;

    console.log(images);
    return (
      <ul className='ImageList'>
        {images.map(image => (
          <ImageItem key={image.name} image={image} />
        ))}
      </ul>
    );
  }
}

export default ImageList;