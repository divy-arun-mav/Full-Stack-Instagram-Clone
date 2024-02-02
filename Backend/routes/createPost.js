const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../models/model');
const POST = mongoose.model('POST');
const requireLogin = require('../middlewares/requireLogin');

router.post("/createpost", requireLogin, (req, res) => {
    const { body, pic } = req.body;
    console.log(pic);
    if (!pic || !body) {
        return res.status(422).json("Please add all the fields");
    }

    // Now you can access req.user for the authenticated user's information

    const post = new POST({
        body,
        photo: pic,
        postedBy: req.user
    });

    post.save().then((result) => {
        return res.json({ post: result });
    }).catch(err => { console.log(err) });
});

module.exports = router;