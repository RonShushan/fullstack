var price = +prompt("product price:");
var payment = +prompt("Enter payment:");

if (payment > price) {
    res = payment - price;
    alert("Take the change : " + res);

} else if (payment < price) {
    res = price - payment;
    alert("Pay the amount : " + res + " ILS.");

} else if (price = payment) {
    alert("תודה ולהתראות!");
}