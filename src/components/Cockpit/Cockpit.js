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
    useEffect(() => {
        console.log('cockpit 2nd UseEffect');
        return () => {
            console.log('cockpit 2nd return useEffect ');
        }
    })
    let btnClass = '';
    if (props.showPerson) {
        btnClass = classes.Red;
    }

    const Aclasses = [];
    if (props.personLength <= 2)
        Aclasses.push(classes.red);

    if (props.personLength <= 1) {
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

export default React.memo(cockpit); 