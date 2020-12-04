import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { addNewUser } from '../actions';

const AddUser = () => {

    const dispatch = useDispatch();

    const formHandler = event => {
        event.preventDefault();
        const {passport, name, age} = event.target.elements;
        console.log(passport.value);
        console.log(name.value);
        console.log(age.value);
        dispatch(addNewUser(passport.value, name.value, age.value))
    };

    return (
        <div>
            <form onSubmit={formHandler}>
                <input name="passport" defaultValue="" />
                <input name="name" defaultValue="" />
                <input name="age" defaultValue="" />
                <button type="submit">Add new user</button>
            </form>
        </div>
    )
};

export default connect()(AddUser)
