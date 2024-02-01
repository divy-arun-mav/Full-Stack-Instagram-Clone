const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 5000;
const {mongoUrl} = require("./keys");
const cors = require("cors");

app.use(cors());

require('./models/model')
app.use(express.json())

require('./models/post')
app.use(require('./routes/createPost'))

app.use(require('./routes/auth'))

mongoose.connect(mongoUrl);

mongoose.connection.on("connected", () => {
    console.log("Connection Successfull");
})

mongoose.connection.on("error", () => {
    console.log("not connected to mongodb");
})

app.listen(port, () => {
    console.log('Server is runnning on port ' + port);
});