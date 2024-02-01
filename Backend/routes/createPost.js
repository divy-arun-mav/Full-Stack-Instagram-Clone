const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../models/model');
const POST = mongoose.model('POST');
const requireLogin = require('../middlewares/requireLogin');

router.post("/createpost",requireLogin, (req, res) => {
    const { title, body } = req.body;
    if (!title || !body) {
        return res.status(422).json("Please add all the fields");
    }
    req.user;
    const post = new POST({
        title,
        body,
        postedBy:req.user
    })
    post.save().then((result) => {
        return res.json({ post: result });
    }).catch(err => { console.log(err) });
})

module.exports = router;