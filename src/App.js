import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './redux/actions'

// to ../ simenei  enas fakelos pisw to ../../redux pou eixes kanei esu dn upirxe to path tou itan ../public/redux

class App extends Component {
  render() {
    const { add , sub, saveInput, value } = this.props
    console.log(actions);
    return (
      <div className="container">
        <h1>{value}</h1>
        <input className="input" onChange = {(e) => saveInput(e.target.value)}></input>
        <div>
          <button className="buttons" onClick = {() => add()}>+</button>
          <button className="buttons" onClick = {() => sub()}>-</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    value: state.praxis.value
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    saveInput: actions.saveInput,
    add: actions.add,
    sub: actions.sub
  },dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

// eprepe na kaneis connect gia na peraseis ta keys tou store sta dika sou props
