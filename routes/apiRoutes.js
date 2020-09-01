const router = require("express").Router();
const db = require("../models/");



// GET STATEMENTS


router.get("/api/workouts", (req, res) => {
    db.workout.find()
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.json(err);
      });
  });

  router.get("/api/workouts/range", ({ query }, res) => {
    db.workout.find({ day: { $gte: query.start, $lte: query.end } })
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.json(err);
      });
  });

// POST STATEMENT

router.post("/api/workouts", function(req, res) {
    db.workout.create(req.body).then(function(dbWorkouts) {
      res.json(dbWorkouts);
    });
  });


// DELETE STATEMENT


router.delete("/api/workouts/:id", function(req, res) {
    db.Author.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbWorkouts) {
      res.json(dbWorkouts);
    });
  });







  module.exports = router;