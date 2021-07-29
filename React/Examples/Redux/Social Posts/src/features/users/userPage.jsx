import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUserById } from './usersSlice.jsx';
import { selectAllPosts, selectPostById, selectPostsByUser } from '../posts/postsSlice.jsx';

const
    UserPage = ({ match }) => {

        const 
            { userId } = match.params,
            user = useSelector(state => selectUserById(state, userId)),
            userPosts = useSelector(state => selectPostsByUser(state, userId)),
            renderedUserPostTitles = userPosts.map(post => (
                <li key={post.id}>
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </li>
            ));

        return (
            <section>
                <h2>{user.name}</h2>
                <ul>{renderedUserPostTitles}</ul>
            </section>
        );

    };

export default UserPage;