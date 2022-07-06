const mongooes = require("mongoose");
const validator = require("validator");

const voteSchema = new mongooes.Schema({

    movieId:{
       type:String,
       required: true
   },
     vote:{
        type:Boolean
     }
         
})

const Vote_List = new mongooes.model("vote_list",voteSchema);

module.exports = Vote_List;