let express = require('express');
const app = express();

//Requiring Monsgoose Model
let shopping_Items = require('../model/shopping_ltems');
let shopping_listRoute = express.Router();


//mongoose Functions
// create()
// findById()
// findByIdAndUpdate()
// findOneAndRemove()


// Get All items
shopping_listRoute.route('/').get((req, res, next) => {
  shopping_Items.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


//create shopping_Items
shopping_listRoute.route('/add').post((req, res, next) => {
  shopping_Items.create(req.body, (error, data) => {

    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


//find by Id
shopping_listRoute.route('/findSelectedItem/:id').get((req, res, next) => {
  shopping_Items.findById(req.params.id, (error, data) => {

    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// //update by id

shopping_listRoute.route('/updateById/:id').put((req, res, next) => {
  shopping_Items.findByIdAndUpdate(req.params.id, req.body, (error, data) => {

    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// //delete by id

shopping_listRoute.route('/remove/:id').delete((req, res, next) => {
  shopping_Items.findByIdAndRemove(req.params.id, (error, data) => {

    if (error) {
      return next(error)
    }else {
      res.json(data)
    }
  })
})
module.exports = shopping_listRoute;
