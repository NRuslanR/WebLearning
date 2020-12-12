const r = require('rethinkdb');

(async () => {

    var conn = await r.connect({ host: 'localhost', port: 28015 });

    var authorsChangesCursor = await r.db('test').table('authors').changes().run(conn);

    console.log('changes waiting....');

    authorsChangesCursor.each((err, row) => {

        console.log('next changes came:');

        console.log(JSON.stringify(row, null, 2));

    });

})();