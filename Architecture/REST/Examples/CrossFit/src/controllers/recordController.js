const
    { RecordService } = require('../services/recordService');

class RecordController
{
    constructor()
    {
        this.recordService = new RecordService();
    }

    getAllRecordsForWorkout = (req, res) => {

        res.json({
            data: this.#addMemberLinksTo(
                req,
                this.recordService.getAllRecordsForWorkout(req.params.id)
            )
        });

    }

    #addMemberLinksTo = (req, records) => {

        return records.map(record => {
            
            const { memberId, ...recordRest } = record;

            var memberLinkedRecord = {

                ...recordRest,
                member: {
                    id: memberId,
                    links: {
                        self: {
                            href: `${req.protocol}://${req.hostname}:3000/api/v1/members/${memberId}`
                        }
                    }
                }
            };

            return memberLinkedRecord;
        });
    }
}

module.exports = RecordController;