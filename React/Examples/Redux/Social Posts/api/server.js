//const { createServer, Model, hasMany, belongsTo, Factory } = require('miragejs');
import { createServer, Model, hasMany, RestSerializer, Serializer, belongsTo, Factory } from 'miragejs';
import faker from 'faker';

//module.exports = () => 
export default function Server()
    {
        return createServer({

            serializers: {
                post: 
                    RestSerializer.extend({
                        include: [
                            "user", 
                            "reactionList"
                        ],
                        embed: true,
                        keyForEmbeddedRelationship(modelName) {
        
                            return (modelName == 'reactionList') ? 'reactions' : modelName;
        
                        },
                        serialize(object, request)
                        {
                            let serialized = 
                                Serializer.prototype.serialize.apply(this, arguments);

                            const transformReactions = (reactions) => {

                                reactions.icons = {};

                                Object
                                    .entries(reactions)
                                    .filter(([name, value]) => name.includes('Icon'))
                                    .forEach(([name, value]) => {

                                        reactions.icons[name.replace('Icon', '')] = value;

                                        delete reactions[name];
                                    }
                                );
                            }

                            if ('posts' in serialized)
                            {
                                serialized.posts.forEach(post => transformReactions(post.reactions));
                            }

                            else transformReactions(serialized.post.reactions);

                            return serialized;
                        }
                    })
                
            },

            factories: {

                post: Factory.extend({

                    title(i) {
                        return `Title ${i}`;
                    },

                    content(i) {
                        return `Content ${i}`;
                    },

                    date()
                    {
                        return faker.date.past().toISOString();
                    }

                }),

                reactionList: Factory.extend({

                    thumbsUp()
                    {
                        return 0;
                    },

                    hooray()
                    {
                        return 0;
                    },

                    heart()
                    {
                        return 0;
                    },

                    rocket()
                    {
                        return 0;
                    },

                    eyes()
                    {
                        return 0;
                    },

                    thumbsUpIcon()
                    {
                        return '👍';
                    },

                    hoorayIcon()
                    {
                        return '🎉';
                    },

                    heartIcon()
                    {
                        return '❤️';
                    },

                    rocketIcon()
                    {
                        return '🚀';
                    },

                    eyesIcon()
                    {
                        return '👀';
                    }
                })

            },

            models: {

                user: Model.extend({
                    posts: hasMany()
                }),

                post: Model.extend({
                    user: belongsTo(),
                    reactionList: belongsTo(),
                }),

                reactionList: Model.extend({
                    post: belongsTo()
                })
            },

            seeds(server) 
            {
                var someUser =
                    server.create(
                        'user', 
                        { 
                            name: 'Nigmatullin Ruslan',
                        }
                    );

                server
                    .createList("post", 3, { user: someUser })
                        .forEach(post => server.create('reactionList', { post }));
                
                someUser =
                    server.create(
                        'user', 
                        { 
                            name: 'Valery Yakovishin',
                        }
                    );

                server
                    .createList("post", 2, { user: someUser })
                        .forEach(post => server.create("reactionList", { post }));
            },

            routes()
            {
                this.urlPrefix = "http://localhost:3000";

                const getRandomTiming = (min, max) => min + Math.ceil(Math.random() * (max - min));

                const createReactionListAttributesForPost = (post) => {

                    return { 
                        post,
                        thumbsUp: 0,
                        hooray: 0,
                        heart: 0,
                        eyes: 0,
                        rocket: 0,
                        thumbsUpIcon: '👍',
                        hoorayIcon: '🎉',
                        heartIcon: '❤️',
                        rocketIcon: '🚀',
                        eyesIcon: '👀'
                    };

                };

                this.get(
                    '/fakeApi/posts',
                    (schema, request) => {

                        return schema.posts.all();

                    },
                    {
                        timing: getRandomTiming(500, 2000)
                    }
                );

                this.get(
                    '/fakeApi/posts/:id',
                    (schema, request) => {

                        let postId = request.params.id;

                        return schema.posts.find(postId);
                    },
                    {
                        timing: getRandomTiming(500, 2000)
                    }
                );

                this.get(
                    '/fakeApi/users',
                    (schema, request) => {

                        return schema.users.all();
                    },
                    {
                        timing: getRandomTiming(500, 2000)
                    }
                ),

                this.post(
                    '/fakeApi/posts',
                    (schema, request) => {

                        var postAttrs = JSON.parse(request.requestBody);

                        var newPost = schema.posts.create({ ...postAttrs, date: new Date().toISOString() });

                        schema.reactionLists.create(createReactionListAttributesForPost(newPost));

                        return newPost;
                    },
                    {
                        timing: getRandomTiming(500, 1200)
                    }
                )

                this.put(
                    '/fakeApi/posts/:id',
                    (schema, request) => {

                        var postId = request.params.id,
                            post = schema.posts.find(postId),
                            postAttrs = JSON.parse(request.requestBody);

                        if (!post) return;

                        post.title = postAttrs.title;
                        post.content = postAttrs.content;
                        post.userId = postAttrs.userId;
                    },
                    {
                        timing: getRandomTiming(500, 1000)
                    }
                );
                
                this.delete(
                    '/fakeApi/posts/:id',
                    (schema, request) => {

                        var postId = request.params.id;

                        schema.posts.find(postId).destroy();
                    },
                    {
                        timing: getRandomTiming(1000, 2000)
                    }
                );
            }
        });
    }