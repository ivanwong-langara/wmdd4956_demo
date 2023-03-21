const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');

app.use(express.json()); 

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

const router = require('./routes');

app.use('/api/v1', router);

require("./app_server/model/db");

app.get("/", (req, res, next) => {
    res.contentType = "text/plain";
    res.send("Hello World!");
    next();
});

app.listen(process.env.PORT || 4000, () => {
    console.log("Server running on port 8080.");
});