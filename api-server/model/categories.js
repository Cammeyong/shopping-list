const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let shopping_list = new Schema ({
  type: {
    type: String
  }

}, {
  collection: 'categories'
})
module.exports = mongoose.model('list', shopping_list)
