const todoModel = require("../models/todo");
const Router = require('koa-router');
const router = new Router();

class Todo {
    async get(ctx) {
        try {
            const d = await todoModel.find();
            ctx.body = d;
        } catch (error) {
            console.log(error.message);
        }
    }

    async put(ctx) {
        const body = ctx.request.body;
        try {
            const _id = body._id;
            const doc = await todoModel.update({
                _id
            }, {
                title: body.title
            });
            ctx.body = doc;
        } catch (error) {
            console.log(error.message);
        }
    }

    async post(ctx) {
        const body = ctx.request.body;
        try {
            var data = new todoModel(body);
            await data.save();
            ctx.body = data;
        } catch (error) {
            console.log(error.message);
        }
    }
    async delete(ctx) {
        const body = ctx.request.body;
        console.log(ctx.router);
        try {
            await todoModel.findByIdAndRemove(body._id).exec();
            ctx.redirect(ctx.router.url('alltodos'));
            // ctx.body = "hi";
        } catch (error) {
            console.log(error.message);
        }
    }
}

module.exports = new Todo();