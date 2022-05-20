import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
function AddUser(props) {
    const [enteredname, setenteredname] = useState('');
    const [enteredage, setenteredage] = useState('');
    const [error, setserror] = useState();
    const adduser = (event) => {
        event.preventDefault();
        if (enteredname.trim().length === 0 || enteredage.trim().length === 0) {
            setserror({
                title:'inalid input',
                message:'please enter a valid input'
            });
            return;
        }
        if (+enteredage < 1) {
            setserror({
                title:'inalid age',
                message:'please enter a valid age(>0)'
            });
            return;
        }
        //console.log(enteredname,enteredage);
        props.onAddUser(enteredname, enteredage);
        setenteredname('');
        setenteredage('');
    };

    const ageadd = (event) => {
        setenteredage(event.target.value);
    };
    const nameadd = (event) => {
        setenteredname(event.target.value);
    };
    const errorHandler =()=>{
        setserror(null);
    }
    return (
        <div>{error &&
            <ErrorModal title={error.title} message={error.message} confirm={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={adduser}>
                    <label htmlFor='name'>enter your name </label>
                    <input id='name' type="text" placeholder='name' value={enteredname} onChange={nameadd} />
                    <label htmlFor='age'>enter your age(years)</label>
                    <input type="number" id='age' placeholder='age' value={enteredage} onChange={ageadd} />
                    <Button type='submit'>add</Button>
                </form>
            </Card>
        </div>
    );
}
export default AddUser;