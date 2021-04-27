import { Component } from 'react';
import './ImageSearch.css';

export default class ImageSearch extends Component {

  render() {
    return (
      <form className="ImageSearch">
        <input />

        <select>
          <option value="">sort by</option>
          <option value="many horns"></option>
        </select>

        <button>Search</button>
      </form>
    );
  }

}