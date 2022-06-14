const
    {
        WorkoutService,
        WorkoutIsNotValidError,
        WorkoutChangingFailedError,
        WorkoutNotFoundError

    } = require("../services/workoutService");

class WorkoutController {

    constructor()
    {
        this.workoutService = new WorkoutService();
    }

    getAllWorkouts = (req, res) => {

        res.json({
            data: this.workoutService.getAllWorkouts({
                page: this.#extractPage(req.query),
                filter: this.#extractFilter(req.query),
                sort: this.#extractSort(req.query)
            })
        });

    }
    
    #extractPage = (reqQuery) => {

        const { page, count } = reqQuery;

        return {
            pageNumber: Number(page),
            itemCount: Number(count)
        };
    }
    
    #extractFilter = (reqQuery) => {

        const { name, mode, equipment, exercises, trainerTips } = reqQuery;

        return {
            name,
            mode,
            equipment,
            exercises,
            trainerTips
        };

    }

    #extractSort = (reqQuery) => {

        return reqQuery.sort?.map(
            fieldName => {
                return {
                    name: fieldName.slice(1),
                    order: fieldName[0] === '-' ? 'desc': 'asc'
                }
            }
        )
    }

    getWorkoutById = (req, res) => {

        try
        {
            return res.json({ data: this.workoutService.getWorkoutById(req.params.id) });
        }

        catch (err)
        {
            if (err instanceof WorkoutNotFoundError) {
                res.status(404).json({
                    data: {
                        errors: [
                            err.message
                        ]
                    }
                })
            }

            else throw err;
        }

    }

    createNewWorkout = (req, res) => {

        const newWorkout = this.bodyToWorkout(req.body);
        
        try
        {
            res.status(201).json({ data: this.workoutService.createNewWorkout(newWorkout) });
        }

        catch (err)
        {
            if (err instanceof WorkoutIsNotValidError) {
                res.status(400).json({
                    data: {
                        errors: [
                            err.message
                        ]
                    }
                })
            }

            else throw err;
        }

    }

    updateWorkout = (req, res) => {

        const workoutChanges = this.bodyToWorkout(req.body);

        try
        {
            res.json({ data: this.workoutService.changeWorkout(req.params.id, workoutChanges) });
        }

        catch (err)
        {
            console.log(JSON.stringify(err));
            
            if (err instanceof WorkoutChangingFailedError) {
                res.status(400).json({
                    data: {
                        errors: [
                            err.message
                        ]
                    }
                })
            }

            else throw err;
        }

    }

    deleteWorkout = (req, res) => {

        try
        {
            this.workoutService.removeWorkoutById(req.params.id);

            res.sendStatus(204);
        }

        catch (err)
        {
            if (err instanceof WorkoutRemovingFailedError) {
                res.status(400).json({
                    data: {
                        errors: [
                            err.message
                        ]
                    }
                })
            }

            else throw err;
        }

    };

    bodyToWorkout = (body) => {

        return {
                name: body.name,
                mode: body.mode,
                equipment: body.equipment,
                exercises: body.exercises,
                trainerTips: body.trainerTips
            };
    }
}

module.exports = WorkoutController;