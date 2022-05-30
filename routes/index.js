var express = require('express');
var router = express.Router();
const mysql = require('mysql2');
var exercise = require('../models/exercise');
const models = require('../models');


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password1',
  database: 'exerapp'
});

connection.connect(function(err) {
  if(err) {
    console.error(err.message);
    return;
  }
  console.log('Yay! You are connected to the database!');
})

const query = `SELECT * from exercise LIMIT 10`;

connection.query(query, (err,results) => {
  if(err) throw err;
  console.log(results);
 });
  


router.get('/', function(req, res){
  let exerciseId = parseInt(req.params.id); 
    console.log(exerciseId);


let idQuery = `SELECT * FROM exercise WHERE exerciseId=${exerciseId}`;
console.log(idQuery);

connection.query(query,(err, result) => {
  console.log(result);
  if(result.length === undefined) {
    res.render('index');
  } else {
    res.send('not a valid id');
  }
  });
});

  const exerciseList = `SELECT * FROM exercise`;

  router.get('/exercise', function (req, res) {
    res.render('exercise');
  });

  router.post('/exercise', (req, res) => {
    models.exercise.findOrCreate({
      where:{
        exerciseName: req.body.exerciseName,
        exerciseType: req.body.exerciseType,
        exerciseDuration: req.body.exerciseDuration
      }
    })
    .spread(function(result, created){
      if(created){
        res.redirect('/exercise');
      }else {
        res.send('This exercise already exists!');
      }
    });
  });


  router.get('/exercises', function (req, res)
  {
    models.exercise.findAll({}).then(exercisesFound => {
      res.render('exercises', {
        exercises: exercisesFound
      });
    });
  });


 

  
    router.post('/exercise', function(req, res){
   console.log(req.body);
   const newExercise = {
     exerciseName: req.body.exerciseName,
     exerciseType: req.body.exerciseType,
     exerciseDuration: req.body.exerciseDuration
   };
   

   const selectExercise = `SELECT * FROM exercise WHERE exerciseName ='${newExercise.exerciseName}' AND exerciseType ='${newExercise.exerciseType}' AND exerciseDuration = '${newExercise.exerciseDuration}`;

   connection.query(selectExercise, function(err, result) {
     if(result.length === undefined) {
       res.send ('Sorry, that exercise already exists');
     } else {
       let newExerciseQuery = `INSERT INTO exercise(exerciseName, exerciseType, exerciseDuration)
       VALUES('${newExercise.exerciseName}', '${newExercise.exerciseType}', '${newExercise.exerciseDuration}')`;

       connection.query(newExerciseQuery, function(err, insertResult){
         if(err) {
           res.send( 'Oops, something went wrong!');
         } else {
           res.redirect('/exercise');
         }
       });
     }
   });
  });




module.exports = router;
