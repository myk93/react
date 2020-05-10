import React, { Component } from 'react';
import classes from './App.css';
//import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
//import styled from 'styled-components';


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
    ShowPerson: true
  }

  static getDerivedStateFromProps(props, state) {
    console.log('App getDerivedStateFromProps called');
    return state;
  }
  componentDidMount() {
    console.log('App componentDidMount called');
  }
  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => p.id === id)

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
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
          <Persons persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
    }

    return (
      <div className={classes.App}>
        <Cockpit Ttitle={this.props.title} persons={this.state.persons} showPerson={this.state.showPerson} toggle={this.togglePersonHandler} />
        {persons}
      </div>

    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default (App);
