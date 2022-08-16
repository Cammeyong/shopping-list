const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let category = new Schema ({
  category: {
    type: String
  }

}, {
  collection: 'categories'
})
module.exports = mongoose.model('category', category)
