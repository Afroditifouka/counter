import { combineReducers } from 'redux';
import R from 'ramda'
const initialState = { // an 8es na giriseis initialState prpei na einai object
  value: 0,
  mpla: 'asdasd'
}

const praxis = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDME':
      return R.assoc('value', state.value + 1, state) // pernei 3 orismata to onoma tou kleidiou pou 8es na alaksei  tin timi pou 8es na tou valeis kai to object pou 8es na alaksei  edw tou lew to key value tou object state 8a parei ti timi state.value +1
      break;
    case 'SUBME':
    return R.assoc('value', state.value - 1, state) // gia na min kaneis mutate
      break;
    default:
      return state
  }
}

const fuckall = (state = initialState, action) => {
  switch (action.type) {
    case 'FUCKIT':
      return initialState // an 8es na giriseis initialState prpei na einai object
      break;
    default:
      return state
  }
}

const allReducers = combineReducers({ // i combineReducers prepei na girnaei ena object pou san kleidia tou exei tous reducer pou eftiakses object apo objects
  praxis,
  fuckall
})


export default allReducers
