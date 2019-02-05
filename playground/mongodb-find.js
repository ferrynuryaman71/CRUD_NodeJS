const {MongoClient, ObjectID} = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017', { useNewUrlParser: true });

	  client.connect((err, db) => {
	if (err) {
		return console.log('unable to connect to server');
	}
		console.log('connect to server');
	db = db.db('TodoApp');


//Read data
	db.collection('User').find({nama : 'ferry'}).toArray().then((docs) => {
		console.log(JSON.stringify(docs, undefined, 2))
	}, (err) => {
		console.log('not connect to server')
	})

	// db.collection('User').find().count().then((count) => {
	// 	console.log(`User count : ${count}`)
	// }, (err) => {
	// 	console.log('Unable to fetch User')
	// })

	client.close();
});
