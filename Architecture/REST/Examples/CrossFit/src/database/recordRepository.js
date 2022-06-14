const
    Database = require('./db.json');

class RecordRepository
{
    constructor()
    {
        this.db = Database;
    }

    getAllRecordsForWorkout = (workoutId) => {

        return this.db.records.filter(record => record.workout === workoutId);
    }
}

module.exports = {

    RecordRepository

};