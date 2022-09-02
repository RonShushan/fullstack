var flag = true;
var users = [];

function onSubmit() {
    var user = {
        product: productDV.value,
        floor: floorDV.value,
        distance: distanceDV.value,
    };
    users.push(user)
        // console.log(users);
    formEL.reset();
}

function printPost() {
    var Weight = "";
    tableBody.innerHTML =
        `<tr>
             <th scope="col">סוג ספה</th>
             <th scope="col">קומה</th>
             <th scope="col">מרחק</th>
            <th scope="col">סה״כ לתשלום</th>
        </tr>`

    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        if (users[i].product == 800)
            Weight = 80;
        if (users[i].product == 1000)
            Weight = 100;
        if (users[i].product == 1200)
            Weight = 120;

        tableBody.innerHTML +=
            `<tr>        
                <td scope="col">${sofa(users[i].product)}</td>
                <td>${user.floor}</td>
                <td>${users[i].distance}</td>
                <td>${((users[i].product * 1) + (Weight * users[i].floor * 1) + (users[i].distance * 5))}₪</td>
            </tr>`
    }
}

function sofa(categoryId) {
    if (categoryId == 800)
        return ' ספת יחיד';
    if (categoryId == 1000)
        return 'ספה זוגית';
    if (categoryId == 1200)
        return 'ספה 3 מושבים '
}