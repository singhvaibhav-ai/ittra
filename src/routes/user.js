const express = require('express');
const router = express.Router();
const { getUser, getUserList, getUserByID } = require('../controllers/user.js');

router.get('/getuser', getUser);
router.get('/getuserlist', getUserList);
router.get('/getuser/:id', getUserByID);


module.exports = router;