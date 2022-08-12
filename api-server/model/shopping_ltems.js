const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let shopping_list = new Schema ({
  item: {
    type: String
  }

}, {
  collection: 'items'
})
module.exports = mongoose.model('list', shopping_list)
