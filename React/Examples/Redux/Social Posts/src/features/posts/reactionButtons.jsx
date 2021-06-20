const
    React = require('react'),
    { useDispatch } = require('react-redux'),
    { reactionAdded } = require('./postsSlice.jsx'),
    reactionIcons = {
        thumbsUp: '👍',
        hooray: '🎉',
        heart: '❤️',
        rocket: '🚀',
        eyes: '👀'
    },
    reactionButtons = ({ post }) => {

        let 
            dispatch = useDispatch();

        return (

            <div>
                {
                    Object.entries(reactionIcons).map(([name, img]) => {
                        
                        return (
                            <button 
                                key={name} 
                                type="button"
                                onClick={
                                    () => dispatch(
                                        reactionAdded(
                                            {
                                                postId: post.id,
                                                reaction: name
                                            }
                                        )
                                    )
                                }
                            >
                                {img} {post.reactions[name]}
                            </button>
                        ); 
                    })
                }
            </div>
        );
    };

module.exports = reactionButtons;
