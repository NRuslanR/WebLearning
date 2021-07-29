import React from 'react';
import PostAuthor from './postAuthor.jsx';
import TimeAgo from './timeAgo.jsx';
import ReactionButtons from './reactionButtons.jsx';
import { Link } from 'react-router-dom';

const
    PostExcerpt = React.memo(({ post }) => {

        return (
            <article className="post-excerpt" key={post.id}>
                <h3>{post.title}</h3>
                <p className="post-content">{post.content}</p>
                Author: <PostAuthor authorId={post.userId} /> 
                <TimeAgo timestamp={post.date} />
                <br/>
                <ReactionButtons post={post} />
                <br/>
                <Link to={`/posts/${post.id}`}>View Post</Link>
            </article>
        );
    });

export default PostExcerpt;