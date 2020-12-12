const r = require('rethinkdb');

(async () => {

    var conn = await r.connect({ host: 'localhost', port: 28015 });

    var result =
        await r.db('test').table('authors').update({ type: 'fictional'}).run(conn);

    console.log('update author filed result:');

    console.log(JSON.stringify(result, null, 2));

    var result =
        await r
                .db('test')
                .table('authors')
                .filter(
                    r.row('name').eq('William Adama')
                ).update({ rank: 'Admiral'})
                .run(conn);

    console.log('adding rank field result:');

    console.log(JSON.stringify(result, null, 2));

    result =
        await r
                .db('test')
                .table('authors')
                .filter(r.row('name').eq('Jean-Luc Picard'))
                .update({
                    posts: r.row('posts').append(
                        {
                            title: 'Domain-Driven Design Forever !',
                            content: 'Agile Software Architecture Design'
                        }
                    )
                })
                .run(conn);

    console.log('posts updating result:');
    console.log(JSON.stringify(result, null, 2));
        
})();