import { createStore } from 'redux';
import AppReducers from './redux/reducers';

const store = createStore(
  AppReducers
)

export store
