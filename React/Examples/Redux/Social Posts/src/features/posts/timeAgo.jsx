/*
const 
    React = require('react'),
    { parseISO, formatDistanceToNow } = require('date-fns');
*/
import React from 'react';
import { parseISO, formatDistanceToNow } from 'date-fns';

//module.exports = ({ timestamp }) => 
export default function TimeAgo({ timestamp })
    {

        let timeAgo = '';

        if (timestamp)
        {
            const 
                date = parseISO(timestamp),
                timePeriod = formatDistanceToNow(date),
                timeAgo = `${timePeriod} ago`;
        }

        return (
            <span title={timestamp}>
                &nbsp; <i>{timeAgo}</i>
            </span>
        );
    }