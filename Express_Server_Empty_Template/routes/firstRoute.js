const express = require('express');
const router = express.Router();
const firstMiddleware = require('../middleware/firstMiddleware.js')

router.get('/', firstMiddleware, (req, res) => {
    console.log(req.newMessage);
    res.render('index');
});

module.exports = router;