import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import client from "../../../api/client";

const
    selectAllNotifications = state => state.notifications,
    fetchNotifications = createAsyncThunk(
        'notifications/getAllNotifications',
        async (_, { getState }) => {

            const
                allNotifications = selectAllNotifications(getState()),
                [latestNotification] = allNotifications,
                timestamp = latestNotification ? latestNotification.date : '',
                newNotifications = await client.getNotificationsSince(timestamp);

            return newNotifications;

        }
    ),
    notificationsSlice = createSlice(
        {
            name: 'notifications',
            initialState: [],
            reducers: {
                allNotificationsRead(state, action) {

                    state.forEach(notification => {
                        notification.read = true;
                    })
                }
            },
            extraReducers: {

                [fetchNotifications.fulfilled]: (notifications, action) => {

                    notifications.forEach(notification => {

                        notification.new = !notification.read;

                    });

                    notifications.push(...action.payload);

                    notifications.sort((a, b) => b.date.localeCompare(a.date));
                }
            
            }
        }
    ),
    notificationsReducer = notificationsSlice.reducer,
    { allNotificationsRead } = notificationsSlice.actions;

export
{
    selectAllNotifications,
    fetchNotifications,
    allNotificationsRead,
    notificationsReducer
}

export default notificationsReducer;