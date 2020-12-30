import { combineReducers } from 'redux';
import { Type } from '../actions/appActions';

const searchInputReducer = (state = '', action) => {
  switch (action.type) {
    case Type.SET_SEARCH_INPUT:
      return action.payload;
    default:
      return state;
  }
};

const resultsReducer = (state = [], action) => {
  switch (action.type) {
    case Type.SET_RESULTS:
      return [...action.payload];
    default:
      return state;
  }
};

const historyItemsReducer = (state = [], action) => {
  switch (action.type) {
    case Type.SET_HISTORY_ITEM:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  searchInput: searchInputReducer,
  results: resultsReducer,
  historyItems: historyItemsReducer,
});
