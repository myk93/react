import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';
//import authContext from '../../context/auth-context';

const cockpit = props => {
    const toggleBtnRef = useRef(null);

    const authContext = useContext(AuthContext);
    useEffect(() => {//component did update+did mount
        console.log('cockpit useEffect called');
        // setTimeout(() => {
        //     // alert('saved data to cloud')
        // }, 1000)
        toggleBtnRef.current.click();
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
            <button ref={toggleBtnRef}
                className={btnClass}
                onClick={props.toggle} >Switch name</button>

            <button onClick={authContext.login} >log in</button>


        </div>
    );
}

export default React.memo(cockpit); 