import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../redux/actions'

class App extends Component {
  render() {
    return (
      <div className="container">
        <input className="input" onChange = {(e) => saveInput(e.target.value)}></input>
        <div>
          <button className="buttons" onClick = {() => add(payload)}>+</button>
          <button className="buttons" onClick = {() => sub(payload)}>-</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  input: state.input
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    saveInput: actions.saveInput
  },dispatch)
}
export default App;
