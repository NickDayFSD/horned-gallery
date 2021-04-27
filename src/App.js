import { Component } from 'react';
import './App.css';
import React from 'react';
import images from './data';
import Header from './Header';
import Footer from './Footer';
import ImageList from './ImageList';
import ImageSearch from './ImageSearch';
import './App.css';

class App extends Component {
  state = {
    images: images
  }

  handleSearch = ({ nameFilter, sortField }) => {
    const nameRegex = new RegExp(nameFilter, 'i');

    const searchedData = images
      .filter(image => {
        return !nameFilter || image.title.match(nameRegex);
      })
      .sort((a, b) => {
        if (a[sortField] < b[sortField]) return -1;
        if (a[sortField] > b[sortField]) return 1;
        return 0;
      });

    this.setState({ images: searchedData });
  }

  render() {
    const { images } = this.state;
    return (
      <div className="App">
        <Header />

        <ImageSearch onSearch={this.handleSearch} />

        <main>
          <ImageList images={images} />
        </main>

        <Footer />

      </div>
    );
  }

}

export default App;
