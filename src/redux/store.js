import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import appReducers from './reducers/appReducers';

const rootReducer = combineReducers({
  app: appReducers,
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
