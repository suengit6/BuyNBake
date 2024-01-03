document.addEventListener('DOMContentLoaded', function () {
    // Retrieve existing orders from localStorage or create an empty array
    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];

    // Retrieve data from localStorage
    const userAccount = localStorage.getItem('userAccount');
    const deliveryAddress = localStorage.getItem('deliveryAddress');
    const cart = JSON.parse(localStorage.getItem('cart')) || {}; // Parse JSON or default to an empty object
    const productTotal = parseFloat(localStorage.getItem('productTotal')) || 0; // Parse as a float or default to 0

    // Create an object to store checkout information
    const orderData = {
        userAccount,
        deliveryAddress,
        cart,
        productTotal,
        completed: false, // Initialize completed status as false
    };

    // Add the current order to the existing orders array
    existingOrders.push(orderData);

    // Store the updated orders array in local storage
    localStorage.setItem('orders', JSON.stringify(existingOrders));

    console.log('Order Data:', orderData);

    // Display items in the table
    const orderTableBody = document.getElementById('orderTableBody');

    if (cart && Object.keys(cart).length > 0) {
        // Iterate over the keys of the cart object
        for (const productName in cart) {
            const product = cart[productName];

            const row = document.createElement('tr');
            row.innerHTML = `
                <td><input type="checkbox" id="${productName}Checkbox"></td>
                <td>${userAccount}</td>
                <td>${deliveryAddress}</td>
                <td>${productName}</td>
                <td>${product.quantity}</td>
                <td>${product.price.toFixed(2)}</td>
            `;
            orderTableBody.appendChild(row);

            // Add event listener to checkbox
            const checkbox = document.getElementById(`${productName}Checkbox`);
            checkbox.addEventListener('change', function () {
                orderData.completed = checkbox.checked;

                // Update the specific order in the orders array
                existingOrders[existingOrders.length - 1] = orderData;

                localStorage.setItem('orders', JSON.stringify(existingOrders));
            });
        }
    } else {
        console.error('Cart data is missing or empty.');
    }
});
