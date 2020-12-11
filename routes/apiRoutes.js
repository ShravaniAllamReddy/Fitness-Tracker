const router = require("express").Router();
const Workout = require("../models/workout.js");

//to get all the workouts data
router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});


// to get the workouts data to display on dashboard webpage
router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// to post the new workout
router.post("/api/workouts", ({ body }, res) => {

    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// to add the new workout to the existing one and to get the total duration
router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findById(params.id)
        .then(workout => {
            console.log(workout);
            const newtotalduration = body.duration + workout.totalDuration;
            Workout.updateOne({ "_id": params.id },
                {
                    $push: {
                        exercises: body
                    },
                    totalDuration: newtotalduration
                })
                .then(dbWorkout => {
                    res.json(dbWorkout);
                })
                .catch(err => {
                    res.status(400).json(err);
                });
        })

});


// Export routes for server.js to use.
module.exports = router;