module.exports = logger = () => {
    return async function (ctx, next) {
        console.log("just saying hi");
        await next();
    }
};