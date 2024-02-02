const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../models/model');
const USER = mongoose.model('USER');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Jwt_secret } = require("../keys");
const requireLogin = require('../middlewares/requireLogin');

router.get('/', (req, res) => {
    console.log("heyy");
    res.send("Hello World");
});

router.post('/signup', (req, res) => {
    const { name, username, email, password } = req.body;

    if (!name || !username || !email || !password) {
        console.log('Please add all the fields');
        return res.status(422).json({ error: "Please add all the fields" });
    }

    USER.findOne({ $or: [{ email: email }, { username: username }] })
        .then((savedUser) => {
            if (savedUser) {
                console.log('User already exists! with that username or email');
                return res.status(422).json({ error: "User already exists! with that username or email" });
            }

            bcrypt.hash(password, 12).then((hashedPassword) => {
                const user = new USER({
                    name,
                    username,
                    email,
                    password: hashedPassword,
                });

                user.save()
                    .then(user => {
                        res.json({ message: "Registered Successfully" });
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(500).json({ error: "Internal server error" });
                    })
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Internal server error" });
        });
});

router.post("/signin", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(422).json({ error: "Please provide a valid username and password" });
    }

    USER.findOne({ username: username }).then((savedUser) => {
        if (!savedUser) {
            return res.status(422).json({ error: "Invalid username or password" });
        }
        
        bcrypt.compare(password, savedUser.password).then((isMatch) => {
            if (isMatch) {
                const token = jwt.sign({ _id: savedUser.id }, Jwt_secret);
                console.log(token);
                res.json({ message: "Login successful", token });
            } else {
                res.status(422).json({ error: "Invalid username or password" });
            }
        }).catch(err => {
            console.log(err);
            res.status(500).json({ error: "Internal server error" });
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    });
});

router.get("/user", (req, res) => {
    try {
        const userData = req.User;
        console.log(userData);
        res.status(200).json({ msg: userData })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
});



module.exports = router;