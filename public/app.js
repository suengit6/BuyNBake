document.addEventListener("DOMContentLoaded", async () => {
  const stripePublicKey =
    "pk_test_51Nfo6zGgyMo6QIJGM3nvDLBvwN2ASnKILTbBzIEeCqGA87Ppt6Ki6SqaFQFLG2LoeZNMfspCl6QpDbSPi02cBtae00Fe249aON";
  const stripe = Stripe(stripePublicKey);
  const checkoutButton = document.getElementById("checkout-button"); //sets variable of check button

  	//listens for click of checkout button in placeorder.html
  	checkoutButton.addEventListener("click", async () => {
		try {
			// get user ID and address from localStorage
			const userAccount = JSON.parse(localStorage.getItem("userAccount")) || {};
			const userId = userAccount.userId;
			const userAddress = userAccount.address || "N/A";

			// get product information from localStorage using the user's ID
			const cart = JSON.parse(localStorage.getItem(`cart_${userId}`)) || {};

			// Check if the cart is not empty
			if (Object.keys(cart).length === 0) {
				alert("Your cart is empty. Add some items before checkout.");
				return;
			}

			// Calculate the total product price
			let totalProductPrice = 0;

			for (const productName in cart) {
				totalProductPrice +=
				cart[productName].price * cart[productName].quantity;
			}

			// Add a fixed shipping fee of 100 PHP
			const shippingFee = 100;

			// Convert the cart object into an array of items
			const items = Object.keys(cart).map((productName) => ({
			price_data: {
				currency: "php", // Replace with your preferred currency
				product_data: {
					name: productName,
					description: `Address: ${userAddress}`, // Include the address in the description
				},
				unit_amount: cart[productName].price * 100, // Stripe expects the amount in cents
				},
				quantity: cart[productName].quantity,
			}));

			// Add shipping fee as a separate line item
			items.push({
				price_data: {
				currency: "php",
				product_data: {
					name: "Shipping Fee",
					description: "Shipping Fee",
				},
				unit_amount: shippingFee * 100,
				},
				quantity: 1,
			});

			// Create a checkout session with product information
			const response = await fetch("/create-checkout-session", {
				method: "POST",
				headers: {
				"Content-Type": "application/json",
				},
				body: JSON.stringify({ items }),
			});

			if (!response.ok) {
				throw new Error("Failed to create checkout session");
			}

			const session = await response.json();

			// Redirect to the checkout page
			const result = await stripe.redirectToCheckout({
				sessionId: session.id,
			});

			if (result.error) {
				throw new Error(result.error.message);
			}
			}catch (error) {
				console.error(error);
				window.location.href = "../pages/offlinePayment.html";
			}
  	});
});
