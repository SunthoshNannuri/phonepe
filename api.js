document.getElementById('paymentForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const amount = document.getElementById('amount').value; // Get amount entered by the user
    if (amount <= 0 || isNaN(amount)) {
        alert("Please enter a valid amount.");
        return;
    }

    const upiId = "9441487955@ibl"; // Replace with your UPI ID
    const userName = "YourName"; // Replace with your name (optional)
    const description = "Payment"; // Description for the payment (optional)

    // Create the UPI deep link for payment
    const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(userName)}&tn=${encodeURIComponent(description)}&am=${amount}&cu=INR`;

    // Redirect the user to the UPI app
    window.location.href = upiLink;

    // Set a timeout to redirect the user to the index.html after the payment process
    setTimeout(function () {
        window.location.href = "index.html"; // Redirect to index.html page
    }, 5000); // Adjust this time as needed
});
