import { combineReducers } from "redux";
import { Type } from "../actions/appActions";

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

const isSearchingReducer = (state = false, action) => {
  switch (action.type) {
    case Type.SET_IS_SEARCHING:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  results: resultsReducer,
  historyItems: historyItemsReducer,
  isSearching: isSearchingReducer,
});
