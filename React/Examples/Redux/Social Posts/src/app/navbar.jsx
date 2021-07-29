/*
const React = require('react'),
      { Link } = require('react-router-dom');
*/
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNotifications, selectAllNotifications } from '../features/notifications/notificationsSlice.jsx';

//module.exports = 
export default
    function Navbar () {

        const
            dispatch = useDispatch(),
            refreshNotifications = () => dispatch(fetchNotifications()),
            notifications = useSelector(selectAllNotifications),
            unReadNotificationCount = notifications.filter(n => !n.read).length,
            unReadNotificationsBadge = 
                unReadNotificationCount > 0 ? <b><i>{`(${unReadNotificationCount})`}</i></b> : '';

        return (
            <nav>
                <div>
                    <h1>Redux Essentials Example</h1>
                    <Link to="/">Posts</Link>
                    &nbsp;
                    <Link to="/users">Users</Link>
                    &nbsp;
                    <Link to="/notifications">Notifications {unReadNotificationsBadge}</Link>
                </div>
                <button onClick={refreshNotifications}>Refresh Notifications</button>
            </nav>
        );
    };