const
    express = require('express'),
    router = express.Router(),
    MemberController = require('../../controllers/memberController'),
    memberController = new MemberController;

router
    .get('/', memberController.getAllMembers)
    .get('/:id', memberController.getMemberById);

module.exports = router;

