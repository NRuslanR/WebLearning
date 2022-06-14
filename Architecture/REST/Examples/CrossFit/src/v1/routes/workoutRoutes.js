const
    express = require("express"),
    WorkoutController = require('../../controllers/workoutController'),
    RecordController = require('../../controllers/recordController'),
    workoutController = new WorkoutController(),
    recordController = new RecordController(),
    apichache = require('apicache'),
    router = express.Router(),
    cache = apichache.middleware;

router.get("/", cache("2 minutes"), workoutController.getAllWorkouts);

router.get("/:id", workoutController.getWorkoutById);

router.post("/", workoutController.createNewWorkout);

router.patch("/:id", workoutController.updateWorkout);

router.delete("/:id", workoutController.deleteWorkout);

router.get("/:id/records", recordController.getAllRecordsForWorkout);

module.exports = router;

