const Router = require('koa-router');
var todo = require('./controllers/todoController');
var logger = require("./http/middlewares/log");
var justsayHi = require("./http/middlewares/justsayHi");


const group1 = new Router();
group1.use(logger());
group1.get('gettodos', '/todo', todo.get).use(logger());
group1.put('/todo', todo.put);


const group2 = new Router();
group2.use(justsayHi());
group2.post('alltodos', '/todo', todo.post);
group2.delete('/todo', todo.delete);


module.exports = {
    group1,
    group2
};