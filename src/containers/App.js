import React, { Component } from 'react';
import classes from './App.css';
//import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
//import styled from 'styled-components';
import withClass from '../hoc/withClass';
import Auxilary from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context'

class App extends Component {
  constructor(props) {
    super(props);
    console.log(' App activated constroctur');

  }

  state = {
    persons: [
      { id: 'affadf', name: 'Max', age: 28 },
      { id: 'fgsdg', name: 'Manu', age: 29 },
      { id: 'fgddfgh', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    ShowPerson: true,
    showCockpit: true,
    changeCounter: 0,
    authnticate: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('App getDerivedStateFromProps called');
    return state;
  }

  componentDidMount() {
    console.log('App componentDidMount called');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('app called shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('app called componentDidUpdate');
  }
  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }
  removeCockpitHandler = () => {
    this.setState({ showCockpit: !this.state.showCockpit });
  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => p.id === id)

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    });
  }
  logInHandler = () => {
    this.setState({ authnticate: true });
  }
  togglePersonHandler = () => {
    this.setState({ ShowPerson: !this.state.ShowPerson })

  }
  render() {
    console.log('App render called');
    let persons = null;

    if (this.state.ShowPerson) {
      persons =
        <div className={classes.App} >
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            isA={this.state.authnticate}
          />
        </div>
    }

    return (
      <Auxilary >
        <button onClick={this.removeCockpitHandler}>remove Cockpit</button>
        <AuthContext.Provider value={{
          authenticated: this.state.authnticate,
          login: this.logInHandler
        }}>
          {this.state.showCockpit ? <Cockpit
            Ttitle={this.props.title}
            persons={this.state.persons}
            personLength={this.state.persons.length}
            showPerson={this.state.ShowPerson}
            toggle={this.togglePersonHandler}
          /> : null}
          {persons}
        </AuthContext.Provider>
      </Auxilary>

    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, classes.App);
