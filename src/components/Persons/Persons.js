import React, { Component } from 'react'
import Person from './Person/Person';


class Persons extends Component {

    // static getDerivedStateFromProps(props, state) {
    //     console.log('persons getDerivedStateFromProps called');
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('persons shouldComponentUpdate called');
        if (nextProps.persons !== this.props.persons) {
            return true;
        }
        return false;
    }

    componentWillUnmount() {
        console.log('persons componentWillUnmount called');
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('persons getSnapshotBeforeUpdate called');
        return { messege: 'snapshot' };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('persons componentDidUpdate called');
        console.log(snapshot);
    }

    render() {
        console.log('Persons rendering');
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)}
                />
            );
        });
    }
}

export default Persons;