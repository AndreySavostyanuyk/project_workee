import {createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {cashReducer} from "./cashReducer"
import { filterReducer } from './filterReducer';
import { filterCandidatesReducer } from './filterCandidatesReducer'
import { filterJobsReducer } from './filterJobsReducer'

const rootReducer = combineReducers({
  cash: cashReducer,
  filters: filterReducer,
  filterCandidates: filterCandidatesReducer,
  filterJobs: filterJobsReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())