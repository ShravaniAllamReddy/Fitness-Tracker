# Fitness-Tracker

## Live Demo

![Fitness Tracker](demo.gif)

## Description

 This Appication is used to view create and track daily workout and also allows to log multiple exercises in a workout on a given day.


## Usage

When you load the page, you should be able to create a new workout or ontinue with your last workout.

   As a User,you should be able to :

      ** Add exercises to a previous workout plan.

      ** Add new exercises to a new workout plan.

      ** View the combined weight of multiple exercises on the `stats` page.

* HTML routes:

  * GET `/exercise` - returns the `exercises.html` file.
  * GET `/stats` - returns the `stats.html` file.
  * GET `/*` - returns the `index.html` file

* The application has a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

* API routes:

  * GET `/api/workouts` - reads the data from Mongodb Collection and returns all the workouts in JSON format.

  * POST `/api/workouts/` - creates a new exercises to new workout plan.

  * PUT `/api/workouts/:id` - This route adds exercises to previous workout plan and gets the total duration of all exercises in a workout plan.


  ## URL of Deployed Application 

  https://safe-gorge-15049.herokuapp.com/

 






