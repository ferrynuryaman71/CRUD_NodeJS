const {MongoClient, ObjectID} = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017', { useNewUrlParser: true });

	  client.connect((err, db) => {
	if (err) {
		return console.log('unable to connect to server');
	}
		console.log('connect to server');
	db = db.db('TodoApp');

//deleteMany
// db.collection('User').deleteMany({age : 19}).then((result) => {
// 	console.log('Delete Succes')
// })

//deleteOne
// db.collection('Todos').deleteOne({nama: 'Andri'}).then((result) => {
// 	console.log('Delete Succes')
// })

//findOneAndDelete
	// db.collection('User').findOneAndDelete({nama : 'ikrar'}).then((result) => {
	// 	console.log('Delete Succes')
	// })

//	db.collection('User').deleteMany({nama : 'Andri'});

	db.collection('User').findOneAndDelete({_id : 4}).then((result) => {
		console.log(JSON.stringify(result, undefined, 2))
	})

	client.close('User');
});
