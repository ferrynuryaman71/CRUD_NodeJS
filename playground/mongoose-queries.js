//const {ObjectID} = require('mongodb');

const {mongoose} = require('./../Server/db/mongoose');
//const {Todo} = require('./../Server/models/todo');
const {User} = require('./../Server/models/user');

var id = '5c5a8287f2f7300d9177bcbf';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

User.find({
  _id: id
}).then((User) => {
  console.log('User', User);
});

// Todo.findOne({
//   _id: id
// }).then((accounts) => {
//   console.log('Todo', accounts);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

// User.findById('5c5a8287f2f7300d9177bcbf').then((User) => {
//   if (!User) {
//     return console.log('Unable to find user');
//   }

//   console.log(JSON.stringify(User, undefined, 2));
// }, (e) => {
//   console.log(e);
// });
