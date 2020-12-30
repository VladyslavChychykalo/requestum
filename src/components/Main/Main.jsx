import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as appActions from '../../redux/actions/appActions';
import shortid from 'shortid';
import useDebounce from '../customHook/useDebounce';
import { fetchRepos } from '../../services/api';

const Main = ({
  searchInput,
  setSearchInput,
  results,
  setResults,
  historyItems,
  setHistoryItem,
  isSearching,
  setIsSearching,
}) => {
  //   const [searchInput, setSearchInput] = useState('');
  //   const [historyItems, setHistoryItem] = useState([]);
  //   const [results, setResults] = useState([]);
  //   const [isSearching, setIsSearching] = useState(false);

  function handleChange({ target }) {
    const { value } = target;
    setSearchInput(value);
  }

  const debouncedSearchTerm = useDebounce(searchInput, 500);

  useEffect(() => {
    const itemHistory = JSON.parse(localStorage.getItem('historyItems'));

    if (!itemHistory || !itemHistory.length) return;

    setHistoryItem(itemHistory.slice(0, 5));
  }, []);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setHistoryItem([
        { id: shortid.generate(), name: debouncedSearchTerm },
        ...historyItems,
      ]);

      setIsSearching(true);

      fetchRepos(debouncedSearchTerm).then(({ data }) => {
        setIsSearching(false);

        setResults(data.items);
      });
    } else {
      setResults([]);
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (historyItems) {
      localStorage.setItem('historyItems', JSON.stringify(historyItems));
    }
  }, [historyItems]);

  return (
    <main>
      <div>
        <input onChange={handleChange} type="text" placeholder="Type to find" />

        <div>
          <p>Search history:</p>
          {!historyItems.length ? (
            <p>You have no history yet</p>
          ) : (
            <ul>
              {historyItems.slice(0, 5).map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <ul>
        {isSearching ? (
          <p>loading ...</p>
        ) : (
          results.map(({ id, name }) => <li key={id}>{name}</li>)
        )}
      </ul>
    </main>
  );
};

const mapStateToProps = (state) => ({
  searchInput: state.app.searchInput,
  results: state.app.results,
  historyItems: state.app.historyItems,
  isSearching: state.app.isSearching,
});

const mapDispatchToProps = (dispatch) => ({
  setSearchInput: (value) => dispatch(appActions.setSearchInput(value)),
  setResults: (value) => dispatch(appActions.setResults(value)),
  setHistoryItem: (value) => dispatch(appActions.setHistoryItem(value)),
  setIsSearching: (value) => dispatch(appActions.setIsSearching(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
