const MongoClient = require("mongodb").MongoClient,
      mongoApp = require(process.argv[2]);

var mongoClient =
  new MongoClient(
    'mongodb://localhost:27017',
    { useNewUrlParser: true }
  );

mongoClient.connect(async (err, client) => {

  if (err != null)
  {
    console.log(err);
    return;
  }

  var db = client.db(process.argv[3]),
      collection =
        (process.argv[4] != null) ?
          db.collection(process.argv[4]) : null;

  if (process.argv[5] != null && process.argv[5] == 'drop')
    collection.drop();

  await mongoApp(db, collection);

  client.close();

});
