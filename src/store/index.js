import {createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {cashReducer} from "./cashReducer"
import { filterReducer } from './filterReducer';

const rootReducer = combineReducers({
  cash: cashReducer,
  filters: filterReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())