const React = require('react'),
      { useSelector } = require('react-redux');

module.exports = ({ authorId }) => {

    const users = useSelector(state => state.users),
          author = users.find(user => user.id === authorId);

    return <span>{ author ? author.name : 'Unknown author' }</span>
};