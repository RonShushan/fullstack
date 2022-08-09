var day = +prompt("product day :");
var month = +prompt("Enter month :");


if (day + 7 > 30) {
    month++;
    day = (day + 7) - 30;
    alert(day + "/" + month)
} else {
    alert((day + 7) + "/" + month)
}