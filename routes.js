const Router = require('koa-router');
const router = new Router();
var todo = require('./controllers/todoController');

router.get('/todo', todo.get);
router.put('/todo', todo.put);
router.post('/todo', todo.post);
router.delete('/todo', todo.delete);


module.exports = router;