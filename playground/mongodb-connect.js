// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017', { useNewUrlParser: true });

	  client.connect((err, db) => {
	if (err) {
		return console.log('unable to connect to server');
	}
		console.log('connect to server');
	db = db.db('TodoApp');


//Create Data

  // db.collection('Todos').insertOne({
  // 	nama	: 'Andri',
  // 	age		: 20,
  // 	location: 'Yogyakarta'
  // },  (err, result) => {
  // 	if (err) {
  // 		return console.log('unable to insert Todos');
  // 	}
  // 		console.log(JSON.stringify(result.ops, undefined, 2));


//Create Data
 db.collection('User').insertOne({
 	email	: 'ferry12@gmail.com',
 	password	: 12345,
 	location: 'Yogyakarta'
 },   (err, result) => {
 	if (err) {
 		return console.log('unable to insert User',);
 	}
 	console.log(result.ops)
 });

  client.close()
})
