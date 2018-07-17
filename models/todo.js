var mongoose = require('mongoose');
var Schema = require('mongoose').Schema;

var Todo = new Schema({
    title: String,
    id: Number
}, {
    collection: 'todo'
});

module.exports = mongoose.model('Todo', Todo);