const express=require("express");
const Stripe=require("stripe")

require("dotenv").config();
const stripe=Stripe(process.env.STRIPE_KEY)
const router=express.Router()
const bodyParser=require("body-parser")


//post request for cheackout
/*router.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'T-shirt',
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/checkout-success`,
      cancel_url: `${process.env.CLIENT_URL}/checkout-cancel`,
    });
  
    res.send({url:session.url });
  });*/
  router.post('/create-checkout-session', async (req, res)=>{
    console.log(req.bodyParser)
  })
  module.exports=router
  