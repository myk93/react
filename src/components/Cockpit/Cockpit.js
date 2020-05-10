import React from 'react';
import classes from './Cockpit.css';

const cockpit = props => {
    let btnClass = '';
    if (props.showPerson) {
        btnClass = classes.Red;
    }

    const Aclasses = [];
    if (props.persons.length <= 2)
        Aclasses.push(classes.red);

    if (props.persons.length <= 1) {
        Aclasses.push(classes.bold);

    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.Ttitle}</h1>
            <p className={Aclasses.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.toggle} >Switch name</button>
        </div>
    );
}

export default cockpit;