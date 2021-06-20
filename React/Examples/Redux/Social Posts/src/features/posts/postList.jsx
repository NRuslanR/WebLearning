const React = require('react'),
      { useSelector } = require('react-redux'),
      { Link } = require('react-router-dom'),
      PostAuthor = require('./postAuthor.jsx'),
      TimeAgo = require('./timeAgo.jsx'),
      ReactionButtons = require('./reactionButtons.jsx');

module.exports = 
    function PostList()
    {
        const posts = useSelector(state => state.posts),
              orderedPosts =
                posts.slice().sort((a, b) => b.date.localeCompare(a.date)),

              renderedPosts = 
                orderedPosts.map(post => (

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
                ));

        return  <section className="post-list">
                    <h2>Posts</h2>
                    {renderedPosts}
                </section>
    };