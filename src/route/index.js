const express = require('express');
const bookingController=require('../controller/bookingController')
const salonServiceController=require('../controller/salonServiceController')
const router=express.Router();
const BOOKING_ROUTE=`/booking`
const SALONSERVICE_ROUTE=`/salonService`

//API for booking
router.get(`${BOOKING_ROUTE}/:id`,function(req,res){
    bookingController.get(req,res)
})
router.post(`${BOOKING_ROUTE}`,function(req,res){
    bookingController.create(req,res)
})

//API for service
router.get(`${SALONSERVICE_ROUTE}/:id`,function(req,res){
    salonServiceController.get(req,res)
})
router.post(`${SALONSERVICE_ROUTE}`,function(req,res){
    salonServiceController.create(req,res)
})

module.exports = router