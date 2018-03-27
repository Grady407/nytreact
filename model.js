var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var NYTSchema = new Schema({

  title: {
    type: String,
    trim: true,
    required: true
  },
  url: {
    type: String,
    unique: true,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
  
});

// This creates our model from the above schema, using mongoose's model method
var NYT = mongoose.model("NYT", NYTSchema);

// Export the Example model
module.exports = NYT;
