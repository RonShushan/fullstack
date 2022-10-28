let CarsArray = []
let id = 1

class Car {
    id = 0
    brand = ''
    price = 0
    year = 0
    carService = []

    constructor(id, brand, price, year) {
        this.id = id
        this.brand = brand
        this.price = price
        this.year = year
    }
    setService(date, km) {
        let ob = {
            date: date,
            km: km,
        }
        this.carService.push(ob)
    }
}

let mazda = new Car(1, 'mazda', 90000, 2022)

let honda = new Car(2, 'honda', 98000, 2021)

mazda.setService('20/10/2022', '50,000')
mazda.setService('20/11/2022', '60,000')
mazda.setService('20/12/2022', '70,000')

honda.setService('20/8/2022', '20,000')

console.log(mazda, honda)

function onSubmit() {
    let car = new Car(id, carDV.value, priceDV.value, yearDV.value)
    CarsArray.push(car)
    console.log(CarsArray)
    id++
}