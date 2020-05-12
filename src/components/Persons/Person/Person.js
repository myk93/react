import React, { Component } from 'react'
import Auxilary from './././../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClass';
import clasess from './Person.css';
import PropTypes from 'prop-types';

class Person extends Component {

    constructor() {
        super();
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        this.inputElementRef.current.focus();
    }
    render() {
        console.log('Person rendering');
        return (
            <Auxilary>
                <p key='i1' onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <p key='i2'>{this.props.children}</p>
                <input
                    key='i3'
                    //ref={(inputEl) => { this.inputEle = inputEl }}
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name} />
            </Auxilary>

        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    canged: PropTypes.func

}
export default withClass(Person, clasess.Person)
