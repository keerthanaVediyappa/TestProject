const mongoose = require("mongoose");
const movie = mongoose.model("movie_list");

exports.find = (req) => {
  const query = { _id: 1, name: 1, genre: 1 };
  return movie.find().select(query);
};

exports.findById = (id) => {
  return movie.findById({ _id: id });
};

exports.findByGenre = (genre) => {
  return movie.find({ genre: genre });
};

exports.findTopTen = (req) => {
  const query = { _id: 1, name: 1, genre: 1, vote:1};
  return movie.find().select(query).limit(10);
};

exports.create = async (req) => {
  const p = new movie();
  p._id = req.body._id;
  p.name = req.body.name;
  p.details  = req.body.details;
  p.genre = req.body.genre;
  p.releaseDate = req.body.releaseDate;
  p.reviews = req.body.reviews;
  return p.save();
};
