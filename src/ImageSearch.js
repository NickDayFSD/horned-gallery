import { Component } from 'react';
import './ImageSearch.css';

export default class ImageSearch extends Component {

  render() {
    return (
      <form className="ImageSearch">
        <input />

        <select>
          <option value="">Text Filter</option>
          <option value="name">Name Order</option>
          <option value="horns">Horns Order</option>
        </select>

        <button>Search</button>
      </form>
    );
  }

}