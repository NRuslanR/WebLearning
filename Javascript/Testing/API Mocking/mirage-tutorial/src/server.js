const 
    { createServer, Model, hasMany, belongsTo, RestSerializer } = require('miragejs');

module.exports = () => {

    createServer({

        serializers: {
            reminder: RestSerializer.extend({
                include: ["list"],
                embed: true
            })
        },
        
        models: {

            list: Model.extend({
                reminders: hasMany()
            }),

            reminder: Model.extend({
                list: belongsTo()
            })
        },

        seeds(server)
        {
            var homeList = server.create("list", { name: "Home" });
            var workList = server.create("list", { name: "Work" });

            server.create("reminder", { list: homeList, text: "Philosophy" });
            server.create("reminder", { list: workList, text: "Art" });
            server.create("reminder", { text: "Sport"});        
        },

        routes() {

            this.get(
                '/api/reminders',
                (schema, request) => {

                    return schema.reminders.all();
                }
            );

            this.get(
                '/api/lists',
                (schema, request) => {

                    return schema.lists.all();
                }
            );

            this.get(
                '/api/lists/:id/reminders',
                (schema, request) => {

                    let listId = request.params.id;

                    return schema.lists.find(listId).reminders;
                }
            );

            this.post(
                '/api/reminders',
                (schema, request) => {

                    let attrs = JSON.parse(request.requestBody);

                    return schema.reminders.create(attrs);
                }
            );

            this.delete(
                '/api/reminders/:id',
                (schema, request) => {

                    let reminderId = request.params.id;

                    return schema.reminders.find(reminderId).destroy();
                }
            );
        }
    });

};