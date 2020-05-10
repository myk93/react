import React, { Component } from 'react'
import Person from './Person/Person';


class Persons extends Component {

    // static getDerivedStateFromProps(props, state) {
    //     console.log('persons getDerivedStateFromProps called');
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('persons shouldComponentUpdate called')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('persons getSnapshotBeforeUpdate called');
    }

    componentDidUpdate() {
        console.log('persons componentDidUpdate called');
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