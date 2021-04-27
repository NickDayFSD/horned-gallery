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

  render() {
    return (
      <div className="App">
        <Header />

        <ImageSearch />

        <main>
          <ImageList images={images} />
        </main>

        <Footer />

      </div>
    );
  }

}

export default App;
