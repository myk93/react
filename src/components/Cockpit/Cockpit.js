import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = props => {
    useEffect(() => {//component did update+did mount
        console.log('cockpit useEffect called');
        setTimeout(() => {
            alert('saved data to cloud')
        }, 1000)

        return () => {
            console.log('cockpit useEffect return');
        }

    }, [])
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
        <div className={classes.Cockpit} >
            <h1>{props.Ttitle}</h1>
            <p className={Aclasses.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.toggle} >Switch name</button>
        </div>
    );
}

export default cockpit; 