const express = require ("express");
const app = express();
require("./src/config/dbconfig");
const model = require("./src/model/movie_list");
const votemodel = require("./src/model/vote_list")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const route = require("./src/route/movieRoute");
app.use(route);

const server = app.listen(3000, function(){
    console.log("API execute port 3000");
});