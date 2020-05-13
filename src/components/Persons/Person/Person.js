import React, { Component } from 'react'
import Auxilary from './././../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClass';
import clasess from './Person.css';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context'
class Person extends Component {

    constructor() {
        super();
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;
    componentDidMount() {
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }
    render() {
        console.log('Person rendering');
        return (
            <Auxilary>
                {this.context.authenticated ? <p key='i0'>authintecated</p> : <p key='i0'>please log in</p>}

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
