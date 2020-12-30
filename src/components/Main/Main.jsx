import React, { Component } from 'react';
import shortid from 'shortid';

export default class Main extends Component {
  state = {
    searchedItems: [],
    searchedValues: [],
    searchInput: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { searchedItems, searchedValues, searchInput } = this.state;

    const obj = {
      id: shortid.generate(),
      searchInput,
    };

    this.setState((prevState) => {
      return {
        searchedValues: [...prevState.searchedValues, obj],
      };
    });

    this.resetInput();
  };

  resetInput = () => {
    this.setState({
      searchInput: '',
    });
  };

  render() {
    const { searchInput, searchedValues } = this.state;
    return (
      <main>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            name="searchInput"
            value={searchInput}
            placeholder="Type to find"
          />
        </form>

        <div>
          <p>Search history:</p>
          {!searchedValues.length ? (
            <p>You have no history yet</p>
          ) : (
            <ul>
              {searchedValues.map(({ id, searchInput }) => (
                <li key={id}>{searchInput}</li>
              ))}
            </ul>
          )}
        </div>
      </main>
    );
  }
}
