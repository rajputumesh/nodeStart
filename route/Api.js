var express = require('express');
var router = express.Router();
//controllers
const {userGet, userStore, userUpdate, userDelete, userSearch} = require('../controller/UserController');
const {auth, adminCheck} = require('../middleware/Auth');

//unauthanticated routes
router.post('/signup' ,userStore);
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

//authanticated routes
router.post('/userSearch', auth, userSearch);
router.get('/userGet', auth, userGet);
router.post('/userDelete', auth, userDelete);
router.post('/updateProfile', auth, userUpdate);

//export this router to use in our index.js
module.exports = { router };