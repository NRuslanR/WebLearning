const
    {
        MemberService,
        MemberNotFoundError
        
    } = require('../services/memberService');

class MemberController
{
    constructor()
    {
        this.memberService = new MemberService();
    }

    getAllMembers = (req, res) => {

        res.json({
            data: this.memberService.getAllMembers()
        });
    }

    getMemberById = (req, res) => {

        try
        {
            res.json({
                data: this.memberService.getMemberById(req.params.id)
            });
        }

        catch (err)
        {
            if (err instanceof MemberNotFoundError) {
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
}

module.exports = MemberController;

