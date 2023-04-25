function firstMiddleware(req, res, next) {
    req.newMessage = 'Hello from middleware';
    next();
};

module.exports = firstMiddleware;