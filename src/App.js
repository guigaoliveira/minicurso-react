import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { bindActionCreators } from "redux";
import todoApp from "./reducers";
import * as actionCreators from "./actions";
import "./index.css";

const List = props => {
  const toRender = props.lista.map((item, index) => (
    <li key={index}>{item}</li>
  ));
  return <ol>{toRender}</ol>;
};

class Form extends Component {
  submit = () => {
    this.props.add(this.refs.myInput.input.value);
    this.refs.myInput.input.value = "";
  };
  render() {
    return (
      <div>
        <TextField ref="myInput" hintText="Digite aqui" />
        <RaisedButton label="Primary" primary onClick={this.submit} />
        <FlatButton label="reset" primary onClick={this.props.reset} />
      </div>
    );
  }
}

let store = createStore(todoApp);

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(actionCreators, dispatch);

const App = props => {
  return (
    <div>
      <AppBar title="Minicurso React" showMenuIconButton={false} />
      <Form reset={props.resetTodo} add={props.addTodo} />
      <List lista={props.todos} />
    </div>
  );
};

const AppRedux = connect(mapStateToProps, mapDispatchToProps)(App);

const Pai = () => {
  return (
    <Provider store={store}>
      <MuiThemeProvider>
        <AppRedux />
      </MuiThemeProvider>
    </Provider>
  );
};
export default Pai;
