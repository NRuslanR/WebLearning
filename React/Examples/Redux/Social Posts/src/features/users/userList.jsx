import React from 'react';
import { selectAllUsers } from './usersSlice.jsx';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const
    UserList = () => {

        const 
            users = useSelector(selectAllUsers),
            renderedUsers = 
                users.map(
                    user => (
                        <li key={user.id}>
                            <Link to={`/users/${user.id}`}>{user.name}</Link>
                        </li>
                    )
                );

        return (
            <section>
                <h2>Users</h2>
                <ul>{renderedUsers}</ul>
            </section>
        );
    }

export default UserList;