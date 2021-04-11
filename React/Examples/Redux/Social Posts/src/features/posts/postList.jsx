const React = require('react'),
      { useSelector } = require('react-redux');

module.exports = 
    function PostList()
    {
        const posts = useSelector(state => state.posts),
              renderedPosts = 
                posts.map(post => (

                    <article className="post-excerpt" key={post.id}>
                        <h3>{post.title}</h3>
                        <p className="post-content">{post.content}</p>
                    </article>
                ));

        return  <section className="post-list">
                    <h2>Posts</h2>
                    {renderedPosts}
                </section>
    };