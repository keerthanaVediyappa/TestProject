const mongoose = require("mongoose");
const vote_details = mongoose.model("vote_list");

exports.saveVote = async (req) => {
  const v = new vote_details();
  v.movieId = req.body.id;
  v.vote = req.body.vote;
  return v.save();
};

exports.findByIdVote = async(id) => {
    return vote_details.find({ movieId: id });
  };

