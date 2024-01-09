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
      cancel_url: 'http://localhost:3000/pages/shop.html',
    });

    // Get the user ID from the items (assuming it's passed in the request)
    const userId = req.body.userId;

    // Save the payment ID with the user ID in localStorage
    const paymentKey = `payment_${userId}`;
    // Note: localStorage is not available on the server-side, you may need to use a database or another storage solution

    res.json({ id: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/webhook', (req, res) => {
  // Handle Stripe webhook events here
  const payload = req.rawBody; // Use rawBody for webhook verification

  try {
    const sig = req.headers['stripe-signature'];
    const event = stripe.webhooks.constructEvent(payload, sig, 'whsec_5fd6db46f286482dfa929752ba3b1fd4a0e33602dd4e250a2bfcc3ed5b7cb8cf');
    
    // Handle different types of events
    switch (event.type) {
      case 'payment_intent.succeeded':
        // Handle successful payment
        console.log('Payment succeeded:', event.data.object);
        break;
      case 'payment_intent.failed':
        // Handle failed payment
        console.log('Payment failed:', event.data.object);
        break;
      // Add more cases as needed for other event types
      default:
        console.log('Unhandled event type:', event.type);
    }
    
    res.status(200).end();
  } catch (err) {
    console.error('Error handling webhook:', err.message);
    res.status(400).json({ error: 'Webhook Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
