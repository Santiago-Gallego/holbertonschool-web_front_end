let stock = {macbook: 2, iphone: 4};

function processPayment(itemName) {
    let tmp = itemName.toLowerCase();
    stock[tmp] = stock[tmp] - 1;
    console.log("Payment is being processed for item " + itemName);
}
function processError(itemName) {
    let tmp = itemName.toLowerCase();
    console.log("No more " + itemName + " in stock");
    console.log("Payment is not being processed");
}
function processOrder(itemName, callbackPayment, callbackError) {
    console.log("Verifying the stock of " + itemName);
    if (stock[itemName.toLowerCase()] > 0) {
        callbackPayment(itemName);
    } else {
        callbackError(itemName);
    }
}

while (stock.macbook > 0 || stock.iphone > 0) {
    let x = prompt("Please enter the item you would like to purchase (Macbook, iPhone)");
    processOrder(x, processPayment, processError);
}
alert("All items are sold out");
