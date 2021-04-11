const React = require('react'),
      useState = React.useState,
      { useDispatch } = require('react-redux'),
      { nanoid } = require('@reduxjs/toolkit'),
      { postAdded } = require('./postsSlice.js');

module.exports =
    function AddPostForm()
    {
        const [title, setTitle] = useState('');
        const [content, setContent] = useState('');
        
        const dispatch = useDispatch();

        const onSavePostClicked = () => {

            if (title && content)
            {
                dispatch(
                    postAdded(
                        {
                            id: Number(nanoid()),
                            title,
                            content
                        }
                    )
                )
            }

            setTitle('');
            setContent('');
        };

        return (
          
            <section>
                <h2>Add New Post</h2>
                <form>
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
                    >
                        Save Post
                    </button>
                </form>
            </section>
            
        );
    }