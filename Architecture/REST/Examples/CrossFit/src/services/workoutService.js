const
    {
        WorkoutRepository,
        WorkoutNotFoundInDatabaseError

    } = require('../database/workoutRepository');

class WorkoutError extends Error
{
    
}

class WorkoutIsNotValidError extends WorkoutError
{
    
}

class WorkoutNotFoundError extends WorkoutError
{
    
}

class WorkoutChangingFailedError extends WorkoutError
{
    
}

class WorkoutRemovingFailedError extends WorkoutError
{
    
}

class WorkoutService
{
    constructor()
    {
        this.workoutRepository = new WorkoutRepository();
    }

    getAllWorkouts = (options) =>
    {
        return this.workoutRepository.getAllWorkouts(options);
    }

    getWorkoutById = (id) => {

        const workout = this.workoutRepository.findWorkoutById(id);

        if (!workout)
            throw new WorkoutNotFoundError('workout not found');
        
        return workout;

    }

    createNewWorkout = (newWorkout) =>
    {
        console.log(JSON.stringify(newWorkout));

        if (!newWorkout ||
            !newWorkout.name ||
            !newWorkout.mode ||
            !newWorkout.equipment ||
            !newWorkout.exercises ||
            !newWorkout.trainerTips
        )
        {
            throw new WorkoutIsNotValidError("Incorrect workout fields");
        }

        newWorkout = {
            ...newWorkout,
            createdAt: new Date().toLocaleString("ru-RU", { timeZone: "GMT" }),
            updatedAt: new Date().toLocaleString("ru-RU", { timeZone: "GMT" }),
        };

        return this.workoutRepository.addWorkout(newWorkout);
    }

    changeWorkout = (id, changes) => {

        if (!id || !changes)
            throw new WorkoutChangingFailedError('changes or id not specified');
        
        var workout = this.workoutRepository.findWorkoutById(id);

        if (!workout)
            throw new WorkoutChangingFailedError('workout for changing not found');
        
        delete changes.createdAt;

        workout = {
            ...workout,
            ...changes,
            updatedAt: new Date().toLocaleString('ru-RU', { timeZone: 'GMT' })
        };

        try
        {
            return this.workoutRepository.updateWorkout(workout);
        }

        catch (err)
        {
            if (err instanceof WorkoutNotFoundInDatabaseError)
                throw new WorkoutChangingFailedError(err.message);
            
            throw err;
        }
    }

    removeWorkoutById = (id) => {

        try
        {
            this.workoutRepository.deleteWorkoutById(id);
        }

        catch (err)
        {
            if (err instanceof WorkoutNotFoundInDatabaseError)
                if (!id)
                    throw new WorkoutRemovingFailedError("Workout id isn't correct");
        }
    }
}

module.exports =
{
    WorkoutService,
    WorkoutIsNotValidError,
    WorkoutNotFoundError,
    WorkoutChangingFailedError,
    WorkoutRemovingFailedError
};