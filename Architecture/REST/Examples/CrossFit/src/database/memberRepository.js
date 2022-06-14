const
    Database = require('./db.json');

class MemberRepository
{
    constructor()
    {
        this.db = Database;
    }

    getAllMembers = () => {

        return this.db.members;

    }

    findMemberById = (id) => {

        return this.db.members.find(member => member.id === id);
    }
}

module.exports = {

    MemberRepository

};