const r = require('rethinkdb');

(async () => {

    var conn = await r.connect({ host: 'localhost', port: 28015 });

    var db = r.db('test');

    if (db.tableList().contains('authors'))
    {
        var tableDroppingResult = await db.tableDrop('authors').run(conn);

        console.log(JSON.stringify(tableDroppingResult, null, 2));
    }

    var tableCreationResult = await r.db('test').tableCreate('authors').run(conn);

    console.log(JSON.stringify(tableCreationResult, null, 2));

    var authorsInfoAddingResult = 
        await db.table('authors').insert(
        [
            { 
                name: "William Adama", tv_show: "Battlestar Galactica",
                posts: [
                    {title: "Decommissioning speech", content: "The Cylon War is long over..."},
                    {title: "We are at war", content: "Moments ago, this ship received word..."},
                    {title: "The new Earth", content: "The discoveries of the past few days..."}
                ]
            },
            { 
                name: "Laura Roslin", tv_show: "Battlestar Galactica",
                posts: [
                    {title: "The oath of office", content: "I, Laura Roslin, ..."},
                    {title: "They look like us", content: "The Cylons have the ability..."}
                ]
            },
            { 
                name: "Jean-Luc Picard", tv_show: "Star Trek TNG",
                posts: [
                    {title: "Civil rights", content: "There are some words I've known since..."}
                ]
            }
        ])
        .run(conn);

    console.log(JSON.stringify(authorsInfoAddingResult, null, 2));

    var authorsCursor = await db.table('authors').run(conn);

    var authors = await authorsCursor.toArray();

    console.log(JSON.stringify(authors, null, 2));

    var filteredCursor = await db.table('authors').filter(r.row('posts').count().gt(2)).run(conn);

    var filteredAuthors = await filteredCursor.toArray();

    console.log('filtered authors:');

    console.log(JSON.stringify(filteredAuthors, null, 2));


})()