const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },

  exercises: {
    type: Array
  },

  // totalduration: {
  //   type: Number,
  // } 
});

// workoutSchema.methods.totalDuration = function () {
//    this.totalduration = `${this.exercises.duration}`;
//    console.log(this.totalduration);
//    return this.totalduration;
// }

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
