import React, { Component } from 'react'
import clasess from './Person.css';

class Person extends Component {
    render() {
        console.log('Person rendering');
        return (
            <div className={clasess.person} >
                <p onClick={this.props.click} key={this.props.id}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} values={this.props.name} />
            </div>
        )
    }
}

export default Person
