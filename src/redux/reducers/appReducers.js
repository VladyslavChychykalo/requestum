import { combineReducers } from 'redux';
import { Type } from '../actions/appActions';

const searchInputReducer = (state = '', action) => {
  switch (action.type) {
    case Type.SEARCH_INPUT:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  searchInput: searchInputReducer,
});
