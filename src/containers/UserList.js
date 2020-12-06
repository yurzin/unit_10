import { useSelector } from 'react-redux';
import List from '../components/List';
import React from "react";

const UserList = () => {
    const users = useSelector(state => state.users);
    return (
        <List user={users}/>
    );
};

export default UserList;