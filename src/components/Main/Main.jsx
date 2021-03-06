import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import "./Main.scss";
import { connect } from "react-redux";
import * as appActions from "../../redux/actions/appActions";
import shortid from "shortid";
import { fetchRepos } from "../../services/api";
import Loader from "../shared/Loader/Loader";

const Main = ({
  results,
  setResults,
  historyItems,
  setHistoryItem,
  isSearching,
  setIsSearching,
}) => {
  const [searchInput, setSearchInput] = useState("");
  //   const [historyItems, setHistoryItem] = useState([]);
  //   const [results, setResults] = useState([]);
  //   const [isSearching, setIsSearching] = useState(false);

  const useDebounce = (fn, delay) => {
    let timer;

    return function (...params) {
      clearTimeout(timer);
      timer = setTimeout(fn, delay, ...params);
    };
  };

  function handleChange({ target }) {
    const { value } = target;
    setSearchInput(value);
  }

  const debouncedHandler = useDebounce(handleChange, 1000);

  useEffect(() => {
    const itemHistory = JSON.parse(localStorage.getItem("historyItems"));

    if (!itemHistory || !itemHistory.length) return;

    setHistoryItem(itemHistory.slice(0, 5));
  }, []);

  useEffect(() => {
    if (searchInput) {
      setHistoryItem([
        { id: shortid.generate(), name: searchInput },
        ...historyItems,
      ]);

      setIsSearching(true);

      fetchRepos(searchInput).then(({ data }) => {
        setIsSearching(false);

        setResults(data.items);
      });
    } else {
      setResults([]);
    }
  }, [searchInput]);

  useEffect(() => {
    if (historyItems) {
      localStorage.setItem("historyItems", JSON.stringify(historyItems));
    }
  }, [historyItems]);

  return (
    <main className="main">
      <div className="main__input-block">
        <input
          className="main__input"
          onChange={debouncedHandler}
          type="text"
          placeholder="Type to find"
        />

        <div>
          <p className="main__text">Search history:</p>
          {!historyItems.length ? (
            <p className="main__text-empty">You have no history yet</p>
          ) : (
            <ul className="main__list">
              {historyItems.slice(0, 5).map(({ id, name }) => (
                <li className="main__item" key={id}>
                  {name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <ul className="main__list lists">
        {isSearching ? (
          <li className="loader">
            <Loader />
          </li>
        ) : (
          <>
            {!results.length ? (
              <li className="loader">No results</li>
            ) : (
              results.map((result) => <Card key={result.id} result={result} />)
            )}
          </>
        )}
      </ul>
    </main>
  );
};

Main.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setResults: PropTypes.func.isRequired,
  historyItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  setHistoryItem: PropTypes.func.isRequired,
  isSearching: PropTypes.bool.isRequired,
  setIsSearching: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  results: state.app.results,
  historyItems: state.app.historyItems,
  isSearching: state.app.isSearching,
});

const mapDispatchToProps = (dispatch) => ({
  setResults: (value) => dispatch(appActions.setResults(value)),
  setHistoryItem: (value) => dispatch(appActions.setHistoryItem(value)),
  setIsSearching: (value) => dispatch(appActions.setIsSearching(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
