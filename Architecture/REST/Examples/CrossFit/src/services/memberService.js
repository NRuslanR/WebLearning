const
    { MemberRepository } = require('../database/memberRepository');

class MemberServiceError 
{
    
}

class MemberNotFoundError extends MemberServiceError
{
}

class MemberService 
{
    constructor()
    {
        this.memberRepository = new MemberRepository();
    }

    getAllMembers = () => {

        return this.memberRepository.getAllMembers();

    }

    getMemberById = (id) => {

        var member = this.memberRepository.findMemberById(id);

        if (!member)
            throw new MemberNotFoundError(`member by id = ${id} not found`);
        
        return member;
    }
}

module.exports = {

    MemberServiceError,
    MemberNotFoundError,
    MemberService

};