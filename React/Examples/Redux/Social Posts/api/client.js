import { format } from "date-fns";

function Client(serverBasePath) {

    var formatPost = post => {

        var userId = post.user.id;

        delete post.user;

        post.userId = userId;

        return post;
    };

    this.getPosts = async () => {

        var response = 
            await fetch(
                `${serverBasePath}/fakeApi/posts`,
                {
                    method: 'GET'
                }
            );

        var postsWrapper = await response.json();

        postsWrapper.posts.forEach(post => formatPost(post));

        return postsWrapper;
    }

    this.getPostById = async (postId) => {

        var response =
            await fetch(
                `${serverBasePath}/fakeApi/posts/${postId}`,
                {
                    method: 'GET'
                }
            );

        return formatPost((await response.json()).post);
    }

    this.addPost = async (post) => {

        var response = 
            await fetch(
                `${serverBasePath}/fakeApi/posts`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(post)
                }
            );

        return formatPost((await response.json()).post);
    }

    this.updatePost = async (post) => {

        await fetch(
            `${serverBasePath}/fakeApi/posts`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(post)
            }
        );
    }

    this.removePost = async (postId) => {

        await fetch(
            `${serverBasePath}/fakeApi/posts/${postId}`,
            {
                method: 'DELETE'
            }
        );
    }

    this.getUsers = async () => {

        var response = 
            await fetch(
                `${serverBasePath}/fakeApi/users`,
                {
                    method: 'GET'
                }
            );

        return await response.json();
    }
}

//module.exports = 
const client =
    new Client('http://localhost:3000');

export default client;