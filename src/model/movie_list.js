const mongooes = require("mongoose");
const validator = require("validator");

const movieSchema = new mongooes.Schema({

  _id:{
     type: String,
     required:true
  },

    name:{
       type:String,
       required: true
   },    
      details:{
        type:String,
        required: true
     },
     genre:{
        type:String,
        required: true
     },
     releaseDate:{
        type:String,
        required: true
     },
     reviews:{
        type:String,
        required: true
     },
     vote:{
        type:Number
     }
         
})

//collection

const Movie_List = new mongooes.model("movie_list",movieSchema);

module.exports = Movie_List;