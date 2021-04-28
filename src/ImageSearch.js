import { Component } from 'react';
import './ImageSearch.css';

export default class ImageSearch extends Component {
  // initialize state here
  state = {
    nameFilter: '',
    sortField: ''
  }

  handleNameChange = ({ target }) => {
    this.setState({ nameFilter: target.value });
  }

  handleSearchChange = ({ target }) => {
    this.setState({ sortField: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSearch(this.state);
  }

  // secret sauce
  componentDidUpdate(prevProp, prevState) {
    if (prevState !== this.state) {
      this.props.onSearch(this.state);
    }
  }

  render() {
    const { nameFilter, sortField } = this.state;

    return (
      <form className="ImageSearch" onSubmit={this.handleSubmit}>
        <input
          name='nameFilter'
          value={nameFilter}
          onChange={this.handleNameChange}
        />

        <select
          name='sortField'
          value={sortField}
          onChange={this.handleSearchChange}
        >
          <option value="">Text Filter</option>
          <option value="title">by Name</option>
          <option value="horns">by Horns</option>
        </select>

        <button>Search</button>
      </form>
    );
  }
}
