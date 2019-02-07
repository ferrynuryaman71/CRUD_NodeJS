const {MongoClient, ObjectID} = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017', { useNewUrlParser: true });

	  client.connect((err, db) => {
	if (err) {
		return console.log('unable to connect to server');
	}
		console.log('connect to server');
	db = db.db('TodoApp');

	//findOneAndUpdate
	db.collection('User').findOneAndUpdate({
		_id	: 1
	}, {
	  $set: {
	  	nama	: 'Ferry'
	  }
	}, {	
		returnOriginal : false
	}).then((result) => {
		console.log(result)
	})

	client.close();
});
