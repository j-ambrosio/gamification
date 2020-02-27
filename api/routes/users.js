const express = require('express');
const router = express.Router();
const user = require('../controllers/users');

router.get('/', function(req, res){
    user.index(req,res);
});

router.post('/adduser', function(req, res) {
    user.create(req,res);
});

router.get('/getuser', function(req, res) {
    user.list(req,res);
});

module.exports = router;
