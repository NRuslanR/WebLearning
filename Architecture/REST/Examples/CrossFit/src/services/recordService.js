const
    { RecordRepository } = require('../database/recordRepository');

class RecordService
{
    constructor()
    {
        this.recordRepository = new RecordRepository();
    }

    getAllRecordsForWorkout = (workoutId) => {

        return this.recordRepository.getAllRecordsForWorkout(workoutId);

    }
}

module.exports = {
    
    RecordService

};