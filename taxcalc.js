var productName =prompt("Please provide product name");
var quantity =prompt("Enter quantity:");
var price =prompt("Enter the price of each product:");
var tax = "0.08";
var priceBeforeTax = quantity*price;
var totalPrice = (priceBeforeTax * tax) + priceBeforeTax;

console.log(`You purchased ${quantity} ${productName} at $${price} each. Your total after tax is ${totalPrice}.`);