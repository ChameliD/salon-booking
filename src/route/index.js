const express = require('express');
const router=express.Router();

router.get('/',function(req,res){
    res.send("Hello")
})
router.post('/',function(req,res){
    console.log('input',req.body)
})

module.exports = router