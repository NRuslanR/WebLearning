const r = require('rethinkdb');

(async () => {

    var conn = await r.connect({ host: 'localhost', port: 28015 });

    var authorsDeletingResult = 
        await r
                .db('test')
                .table('authors')
                .filter(r.row('posts').count().lt(3))
                .delete()
                .run(conn);

    console.log('authors deleting result:');
    console.log(JSON.stringify(authorsDeletingResult, null, 2));

})();