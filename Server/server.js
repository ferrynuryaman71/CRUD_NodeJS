var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	 var todo = new Todo({
		text: req.body.text
	});
	todo.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	});
});

app.listen(3000, () => {
	console.log('started on port 3000');
});



// var newAccount = new Account({
// 	text : 'cooking dinner'
// });

// newAccount.save().then((doc) => {
// 	console.log('save Account', doc);
// }, (e) => {
// 	console.log('unable to save Account');
// });

// var newAccount = new Account({
// 	text : 'you can do it'
// })

// newAccount.save().then((doc) => {
// 	console.log(JSON.stringify(doc, undefined, 2))
// }, (e) => {
// 	console.log('save User not succses')
// })


// var newUser = new User({
// 	email : 'ferry12@gmail.com'
// });

// newUser.save().then((doc) => {
// 	console.log('create user succes', doc)
// }, (e) => {
// 	console.log('create account not succes', e)
// })