import { Component } from 'react';
import './App.css';
import React from 'react';
import images from './data';
import Header from './Header';
import Footer from './Footer';
import ImageList from './ImageList';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <ImageList images={images} />
        </main>

        <Footer />

      </div>
    );
  }

}

export default App;
