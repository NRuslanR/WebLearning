const React = require('react'),
      useState = React.useState,
      { useDispatch, useSelector} = require('react-redux'),
      { useHistory } = require('react-router-dom'),
      { postUpdated } = require('./postsSlice.jsx');

module.exports = ({ match }) => {

    const { postId } = match.params,
            post = useSelector(state => state.posts).find(p => p.id == postId);

    if (!post)
    {
        return <h2>Post not found</h2>
    }

    const [ title, setTitle ] = useState(post.title),
          [ content, setContent] = useState(post.content);

    const dispatch = useDispatch(),
          history = useHistory();

    const onPostTitleChanged = e => setTitle(e.target.value),
          onPostContentChanged = e => setContent(e.target.value),
          onSavePostClicked = () => {

            if (title && content)
            {
                dispatch(postUpdated({ id: post.id, title, content}));
                history.push(`/posts/${postId}`);
            }

          };

    return (
        <div>
            <div>
                <label>Title:</label>
                <br/>
                <input
                    type="text"
                    onChange={onPostTitleChanged}
                    value={title}
                />
            </div>
            <div>
                <label>Content:</label>
                <br/>
                <textarea
                    value={content}
                    onChange={onPostContentChanged}
                >
                </textarea>
            </div>
            <button onClick={onSavePostClicked}>Save</button>
        </div>
    );

}
      