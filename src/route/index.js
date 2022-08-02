const express = require('express');
const bookingController=require('../controller/bookingController')
const router=express.Router();

router.get('/:id',function(req,res){
    bookingController.get(req,res)
})
router.post('/',function(req,res){
    bookingController.create(req,res)
})

module.exports = router