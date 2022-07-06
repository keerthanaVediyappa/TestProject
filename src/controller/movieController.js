const express = require("express");
const router = new express.Router();
const MovieDetails = require("../service/movieService");
const VoteDetails = require("../service/voteServie")

exports.find = async(req, res) => {
    MovieDetails.find(req).then((movie) => {
        res.send(movie);
    })
    .catch((e) => {
        res.send(e);
       })
};

exports.findById = (req, res) =>{
    const id = req.body.id;
    MovieDetails.findById(id).then((movie) => {
      if(!movie) {  
        return res.send("No record found");
    }
    res.send(movie);
    })  
  .catch((e) => {
      res.send(e);
  })
};

exports.findByGenre = (req, res) =>{
    const genre = req.body.genre;
    MovieDetails.findByGenre(genre).then((movie) => {
      if(!movie) {  
        return res.send("No record found");
    }
    res.send(movie);
    })  
  .catch((e) => {
      res.send(e);
  })
};

exports.findTopTen = async(req, res) => {
    MovieDetails.findTopTen(req).then(async(movies) => {
        const resp = movies.map(async (m) => {
            const id = m._id;
            const value = await VoteDetails.findByIdVote(id).then((votes) => {
                return votes;
            });
            const voteValue = (value.filter(item => item.vote === true)).length;
            m.vote = m.vote+voteValue;
            return m;
        })
        const response = await Promise.all(resp)
        response.sort((a, b) => (b.vote) - (a.vote));
        res.send(response);
    })
    .catch((e) => {
        res.send(e);
       })
};

exports.findByIdVote = (req, res) =>{
    const Id = req.body.id;
    VoteDetails.findByIdVote(Id).then((votes) => {
    res.send(votes);
    })  
  .catch((e) => {
      res.send(e);
  })
};

exports.saveVote = async(req, res) => {
    try{
        const votes = await VoteDetails.saveVote(req);
        JSON.stringify(votes);
        res.send(votes);
    }catch(e){
        res.send("error to add votes");
    }
};

exports.create = async(req, res) => {
    try{
        const movie = await MovieDetails.create(req);
        JSON.stringify(movie);
        res.send(movie);
    }catch(e){
        res.send("error to add movie");
    }
};