const
    Database = require('./db.json'),
    { saveToDatabase } = require('./utils'),
    { v4: uuid } = require('uuid');

class WorkoutRepositoryError extends Error
{
    
}

class WorkoutNotFoundInDatabaseError extends WorkoutRepositoryError 
{
    
}

class WorkoutRepository 
{
    constructor()
    {
        this.db = Database;
    }

    getAllWorkouts = (options) =>
    {   
        return this.#sortWorkouts(
            this.#filterWorkouts(
                this.#paginateWorkouts(this.db.workouts, options?.page),
                options?.filter
            ),
            options?.sort
        );
    }

    #paginateWorkouts(workouts, page)
    {
        if (!page)
            return workouts;
        
        const
            { pageNumber, itemCount } = page,
            itemsPerPage = 10,
            startWorkoutIndex =
                pageNumber >= 0 ? pageNumber * itemsPerPage : 0,
            endWorkoutIndex =
                itemCount > 0 ?
                    startWorkoutIndex + itemCount :
                    startWorkoutIndex + itemsPerPage;
                
        workouts = workouts.slice(startWorkoutIndex, endWorkoutIndex);
        
        return workouts;
    }

    #filterWorkouts(workouts, filter)
    {
        return !filter ? workouts : workouts.filter(
            w => {
                for (var fieldName in filter) {

                    if (!(filter[fieldName] && w[fieldName]))
                        continue;
                    
                    if (!(w[fieldName]?.toString().toLowerCase().includes(
                        filter[fieldName].toLowerCase()
                    )))
                        return false;
                }

                return true;
            }
        );
    }

    #sortWorkouts(workouts, sort)
    {
        return !sort ? workouts : workouts.sort((w1, w2) => {

            var result = 0;

            for (var { name: fieldName, order: fieldOrder } of sort) {

                const
                    firstFieldValue = w1[fieldName]?.toString().toLowerCase(),
                    secondFieldValue = w2[fieldName]?.toString().toLowerCase();
                
                if (!(firstFieldValue && secondFieldValue))
                    continue;
                
                result =
                    result ||
                    fieldOrder === 'desc' ?
                        secondFieldValue.localeCompare(firstFieldValue) :
                        firstFieldValue.localeCompare(secondFieldValue);
                
                if (result != 0)
                    break;
            }

            return result;
        });
    }

    findWorkoutById = (id) => {

        return this.db.workouts.find(w => w.id === id);

    }

    addWorkout = (workout) => {

        workout.id = uuid();
    
        this.db.workouts.push(workout);

        saveToDatabase(this.db);

        return workout;
    }

    updateWorkout = (workout) => {

        const workoutIndex = this.db.workouts.findIndex(w => w.id === workout.id);

        if (workoutIndex == -1) 
            throw new WorkoutNotFoundInDatabaseError('Workout not found for update');
            
        this.db.workouts[workoutIndex] = workout;

        saveToDatabase(this.db);

        return workout;
    }

    deleteWorkoutById = (id) => {

        const workoutIndex = this.db.workouts.findIndex(w => w.id === id);

        if (workoutIndex == -1)
            throw new WorkoutNotFoundInDatabaseError('Workout not found for delete');
        
        this.db.workouts.splice(workoutIndex, 1);

        saveToDatabase(this.db);
    }
}

module.exports =
{
    WorkoutRepository,
    WorkoutNotFoundInDatabaseError
};