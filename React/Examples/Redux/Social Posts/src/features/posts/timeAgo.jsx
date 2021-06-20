const 
    React = require('react'),
    { parseISO, formatDistanceToNow } = require('date-fns');

module.exports = ({ timestamp }) => {

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