const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../models/model');
const USER = mongoose.model('USER');
const POST = mongoose.model('POST');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Jwt_secret } = require("../keys");
const requireLogin = require('../middlewares/requireLogin');

router.get('/', async (req, res) => {
    console.log("heyy");
    res.send("Hello World");
});

router.post('/signup', async (req, res) => {
    const { name, username, email, password } = req.body;

    if (!name || !username || !email || !password) {
        console.log('Please add all the fields');
        return res.status(422).json({ error: "Please add all the fields" });
    }

    try {
        const savedUser = await USER.findOne({ $or: [{ email: email }, { username: username }] });
        if (savedUser) {
            console.log('User already exists with that username or email');
            return res.status(422).json({ error: "User already exists with that username or email" });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = new USER({
            name,
            username,
            email,
            password: hashedPassword,
        });

        await user.save();

        res.json({ message: "Registered Successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.post("/signin", async (req, res) => {
    const { username, password } = req.body;

    try {
        if (!username || !password) {
            return res.status(422).json({ error: "Please provide both username and password" });
        }

        const savedUser = await USER.findOne({ username: username });

        if (!savedUser) {
            return res.status(422).json({ error: "Invalid email" });
        }

        const match = await bcrypt.compare(password, savedUser.password);

        if (match) {
            const token = jwt.sign({ _id: savedUser.id }, Jwt_secret);
            const { _id, name, email, userName } = savedUser;

            return res.json({ token, user: { _id, name, email, userName } });
        } else {
            return res.status(422).json({ error: "Invalid password" });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
    }
});


router.get("/user", requireLogin, async (req, res) => {
    try {
        const userData = req.user;
        console.log(userData);
        res.status(200).json({ msg: userData })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.get("/posts", async (req, res) => {
    try {
        const posts = await POST.find().populate("postedBy", "_id username");
        res.json(posts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
})

router.get("/myposts", requireLogin, async (req, res) => {
    try {
        const myposts = await POST.find({ postedBy: req.user._id })
        res.json(myposts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
})


module.exports = router;