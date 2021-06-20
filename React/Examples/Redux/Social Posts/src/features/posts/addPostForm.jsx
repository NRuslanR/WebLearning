const React = require('react'),
      useState = React.useState,
      { useDispatch, useSelector } = require('react-redux'),
      { postAdded } = require('./postsSlice.jsx');

module.exports =
    function AddPostForm()
    {
        const [title, setTitle] = useState('');
        const [content, setContent] = useState('');
        const [userId, setUserId] = useState('');
        
        const dispatch = useDispatch();

        const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

        const users = useSelector(state => state.users);

        const onSavePostClicked = () => {

            dispatch(postAdded(title, content, userId));

            setTitle('');
            setContent('');
            setUserId('')
        };

        return (
          
            <section>
                <h2>Add New Post</h2>
                <form>
                    <div>
                        <label htmlFor="postAuthor">Author:</label>
                        <select 
                            id="postAuthor" 
                            value={userId} 
                            onChange={e => setUserId(Number(e.target.value))}
                        >
                            <option value=""></option>
                            {
                                users.map(user => {
                                    return (
                                        <option key={user.id} value={user.id}>
                                            {user.name}
                                        </option>
                                    );
                                })
                            }
                        </select>
                    </div>
                    <div>
                        <label>Post Title:</label>
                        <br/>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Content:</label>
                        <br/>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </div>
                    <button 
                        type="button"
                        onClick={onSavePostClicked}
                        disabled={!canSave}
                    >
                        Save Post
                    </button>
                </form>
            </section>
            
        );
    }