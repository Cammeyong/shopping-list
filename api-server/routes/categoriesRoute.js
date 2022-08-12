let express = require('express');
const app = express();

//Requiring Monsgoose Model
let categories = require('../model/categories');
let categoriesRoute = express.Router();


//mongoose Functions
// create()
// findById()
// findByIdAndUpdate()
// findOneAndRemove()


// Get All items
categoriesRoute.route('/').get((req, res, next) => {
  categories.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


//create shopping_Items
categoriesRoute.route('/add').post((req, res, next) => {
  categories.create(req.body, (error, data) => {

    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


//find by Id
categoriesRoute.route('/findSelectedItem/:id').get((req, res, next) => {
  categories.findById(req.params.id, (error, data) => {

    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// //update by id

categoriesRoute.route('/updateById/:id').put((req, res, next) => {
  categories.findByIdAndUpdate(req.params.id, req.body, (error, data) => {

    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// //delete by id

categoriesRoute.route('/remove/:id').delete((req, res, next) => {
  categories.findByIdAndRemove(req.params.id, (error, data) => {

    if (error) {
      return next(error)
    }else {
      res.json(data)
    }
  })
})
module.exports = shopping_listRoute;
