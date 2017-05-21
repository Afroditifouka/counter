import { combineReducers } from 'redux';

const initialState = 0

const praxis = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDME':
      return state + 1
      break;
    case 'SUBME':
      return state - 1
      break;
    default:
      return state
  }
}

const fuckall = (state = initialState, action) => {
  if action.type = 'FUCKIT' ? return initialState
}

const allReducers = combineReducers(
  praxis,
  fuckall
)

export allReducers
