const router = require("express").Router();
const stripe = require("stripe")(
  "sk_test_51N7r4OBOou8k29epzLAU2NJzJb3X2uCOquCtvPm36qokTwVNLswE4kknzqtvwbFwrKNzQUPM1xQUs2jV30Ekkr9G00YPvuq2dw"
);

// "sk_test_51N6SokEyrZyjTHe0p6XLtVz9PsbTuhtvaxAf4TNaUGdOUS69nxVgjuwvRljbzzJVBnxGPZgiZ7OronMgVBiTvfcf00Ag1ytyht"
router.post("/charge", async (req, res) => {
  try {
    const { amount, id } = req.body;

    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "React Stripe Payment",
      payment_method: id,
      confirm: true,
    });

    console.log(payment);

    res.json({
      message: "Payment Successful",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: "Payment Failed",
      success: false,
    });
  }
});

router.post("/create-payment-intent", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "USD",
      amount: req.body.amount,
      automatic_payment_methods: { enabled: true },
    });

    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});

module.exports = router;
