var Koa = require('koa');
var bodyParser = require('koa-bodyparser');
var router = require("./routes");
db = require('./models/db');

var app = new Koa();
app.use(bodyParser());
app
    .use(router.group1.routes())
    .use(router.group1.allowedMethods())
    .use(router.group2.routes())
    .use(router.group2.allowedMethods());

app.listen(3000);