const express = require ("express");
const app = express();
require("./config/dbconfig");
const model = require("./model/movie_list");
const votemodel = require("./model/vote_list")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const route = require("./route/movieRoute");
app.use(route);

const server = app.listen(3000, function(){
    console.log("API execute port 3000");
});