const express = require('express');
const stripe = require('stripe')('sk_test_51Nfo6zGgyMo6QIJGTOpbuBdIeEnUNz3RLE3WefQ1GDH16Bf4QGom8PV7PUl6Yw8lhlxCgxkq84EEPEaLy3SlDgBE00nd5xF7Pr');

const app = express();
const port = 3000;

app.use(express.static(__dirname));
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: req.body.items,
      mode: 'payment',
      success_url: 'http://localhost:3000/pages/success.html',
      cancel_url: 'http://localhost:3000/pages/account.html',
    });

    // Get the user ID from the items (assuming it's passed in the request)
    const userId = req.body.userId;

    // Save the payment ID with the user ID in localStorage
    const paymentKey = `payment_${userId}`;
    localStorage.setItem(paymentKey, session.payment_intent);

    res.json({ id: session.id });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/webhook', (req, res) => {
  // Handle Stripe webhook events here
  const payload = req.rawBody; // Use rawBody for webhook verification

  try {
    const sig = req.headers['stripe-signature'];
    const event = stripe.webhooks.constructEvent(payload, sig, 'whsec_5fd6db46f286482dfa929752ba3b1fd4a0e33602dd4e250a2bfcc3ed5b7cb8cf');
    
    // Handle the event
    console.log('Webhook received:', event.type);
    
    res.status(200).end();
  } catch (err) {
    console.error('Error handling webhook:', err.message);
    res.status(400).end('Webhook Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
