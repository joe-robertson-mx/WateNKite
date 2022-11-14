const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the records.
recordRoutes.route("/workouts").get(function (req, res) {
 let db_connect = dbo.getDb("records");
 db_connect
   .collection("workouts")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// This section will help you get a single record by id
recordRoutes.route("/workout/:id").get(function (req, res) {
 let db_connect = dbo.getDb("records");
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect
   .collection("workouts")
   .findOne(myquery, function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});

recordRoutes.route("/set/:id").get(function (req, res) {
  let db_connect = dbo.getDb("records");
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect
    .collection("sets")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
 });

// This section gets the sets from a workout
recordRoutes.route("/workout/:id/sets").get(function (req, res) {
  let db_connect = dbo.getDb("records");
  let myquery = { parent: req.params.id };
  db_connect
    .collection("sets")
    .find(myquery)
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

 
// This section will help you create a new record.
recordRoutes.route("/workout/add").post(function (req, response) {
 let db_connect = dbo.getDb("records");
 let myobj = {
   _id: req.body._id,
   name: req.body.name,
   date: req.body.date,
 };
 db_connect.collection("workouts").insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});

// This section will help you create a new record.
recordRoutes.route("/set/add").post(function (req, response) {
  let db_connect = dbo.getDb("records");
  let myobj = {
    _id: req.body._id,
    type: req.body.type,
    reps: req.body.reps,
    weight: req.body.weight,
    parent: req.body.parent,
  };
  console.log (req.body)
  db_connect.collection("sets").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
 });
 
// This section will help you update a record by id.
recordRoutes.route("/workout/update/:id").post(function (req, response) {
 let db_connect = dbo.getDb("record");
 let myquery = { _id: ObjectId(req.params.id) };
 console.log (req.body)
 let newvalues = {
   $set: {
   name: req.body.workout.name,
   date: req.body.workout.date,
   },
 };
 console.log (newvalues);
 db_connect
   .collection("workouts")
   .updateOne(myquery, newvalues, function (err, res) {
     if (err) throw err;
     console.log("1 document updated");
     response.json(res);
   });
});

// This section will help you update a record by id.
recordRoutes.route("/set/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb("record");
  let myquery = { _id: ObjectId(req.params.id) };
  console.log (req.body)
  let newvalues = {
    $set: {
      type: req.body.set.type,
      reps: req.body.set.reps,
      weight: req.body.set.weight,
    },
  };
  console.log (newvalues);
  db_connect
    .collection("sets")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
 });
  
 
// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
 let db_connect = dbo.getDb("records");
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect.collection('sets').deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("1 document deleted");
   response.json(obj);
 });
});

recordRoutes.route("/records/deleteAll").delete((req, response) => {
  let db_connect = dbo.getDb("records");
  db_connect.collection().deleteMany({}, function (err, obj) {
    if (err) throw err;
    console.log("All documents deleted");
    response.json(obj);
  });
});
 
module.exports = recordRoutes;