var cars = []
var carCount = 2
for (i = 0; i < 2; i++) {
    var car = []
    car.name = prompt('car name')
    car.year = prompt('car year')

    cars.push(car)
}
var searchYear = prompt('enter year')

for (i = 0; i < carCount; i++) {
    if (searchYear == cars[i].year) {
        console.log('CAR : ', cars[i])
    }
}



console.log(cars)