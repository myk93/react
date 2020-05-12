import React, { Component } from 'react'
import Auxilary from './././../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClass';
import clasess from './Person.css';

class Person extends Component {
    render() {
        console.log('Person rendering');
        return (
            <Auxilary>
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    onChange={this.props.changed}
                    values={this.props.name} />
            </Auxilary>

        )
    }
}

export default withClass(Person, clasess.Person)
