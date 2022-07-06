const express = require("express");
const router = express.Router();
const route = require("../controller/movieController");

 //Fetch All
 router.get("/home", (req, res) => {
    route.find(req, res);
  });

  //Fetch by Id
  router.post("/home/id", (req, res) => {
    route.findById(req, res);
  });

  //Fetch by genre
  router.post("/home/genre", (req, res) => {
    route.findByGenre(req, res);
  });

  //Fetch top 10 based on votes
  router.get("/home/top", (req, res) => {
    route.findTopTen(req, res);
  });

  router.post("/home/vote", (req, res) => {
    route.saveVote(req, res);
  });

  router.post("/home/vote/id", (req, res) => {
    route.findByIdVote(req, res);
  });

   //create db
   router.post("/home", (req, res) => {
    route.create(req, res);
  });

  module.exports = router;