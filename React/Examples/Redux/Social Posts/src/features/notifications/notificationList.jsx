import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import TimeAgo from "../posts/timeAgo.jsx";
import { selectAllUsers } from "../users/usersSlice.jsx";
import { selectAllNotifications, allNotificationsRead } from "./notificationsSlice.jsx";

const
    NotificationList = () => {

        console.log('NotificationList render');

        const 
            dispatch = useDispatch(),
            notifications = useSelector(selectAllNotifications),
            users = useSelector(selectAllUsers),
            renderedNotifications = 
                notifications.map(notification => {

                    const
                        user = users.find(user => user.id == notification.userId) 
                                || { name: 'Unknown User'},
                        style = notification.new ? 
                                    {
                                        background: 'lightgreen'
                                    } : null;

                    return (
                        <div key={notification.id} style={style}>
                            <div>
                                <b>{user.name}</b> {notification.message}
                            </div>
                            <div>
                                <TimeAgo timestamp={notification.date} />
                            </div>
                        </div>
                    )
                });

        useEffect(() => {

            dispatch(allNotificationsRead());

        });

        return (
            <section>
                <h2>Notifications</h2>
                {renderedNotifications}
            </section>
        );
    };

export default NotificationList;