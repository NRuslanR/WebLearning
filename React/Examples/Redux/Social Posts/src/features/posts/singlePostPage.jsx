const React = require('react'),
      { useSelector } = require('react-redux'),
      { Link } = require('react-router-dom'),
        PostAuthor = require('./postAuthor.jsx'),
        TimeAgo = require('./timeAgo.jsx'),
        ReactionButtons = require('./reactionButtons.jsx');

module.exports = ({ match }) => {

    const { postId } = match.params,
            post = useSelector(state => state.posts.find(post => post.id == postId));

    if (!post)
    {
        return (
            <section>
                <h2>Post not found !</h2>
            </section>
        );
    }

    return (
        <section>
            <article>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                Author: <PostAuthor authorId={post.userId} />
                <TimeAgo timestamp={post.date} />
                <br></br>
                <ReactionButtons post={post} />
                <Link to={`/editPost/${post.id}`}>Edit</Link>
            </article>
        </section>
    );
};