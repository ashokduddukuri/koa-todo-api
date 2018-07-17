var Koa = require('koa');
var bodyParser = require('koa-bodyparser');
var router = require("./routes");
db = require('./models/db');
var app = new Koa();
app.use(bodyParser());
app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);