import { Component } from 'react';
import './App.css';
import React from 'react';
import hornies from './data';
import Header from './Header';
import Footer from './Footer';
import HornedList from './HornedList';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <HornedList hornies={hornies} />
        </main>

        <Footer />

      </div>
    );
  }

}

export default App;
