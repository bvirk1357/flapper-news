var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  title: String,
  link: String,
  upvotes: {types: Number, default: 0},
  comments: [{type: mongoose.Schema.Types.Objectid, ref: 'Comment'}]
});

mongoose.model('Post', PostSchema);
