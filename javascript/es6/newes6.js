let randomArray = []
let names = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
let phones = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

let getRandomNumber = (max) => {
    let r = Math.floor(Math.random() * max)
    return r
}

let createObject = (rand) => {
    let ob = {
        name: names[rand],
        phone: phones[rand]
    }
    return ob;

}

let randomLoop = getRandomNumber(100) + 1
console.log('randomLoop :', randomLoop)

for (let i = 0; i < randomLoop; i++) {
    randomArray.push(getRandomNumber(1000))
    let rand = getRandomNumber(10)
    let ob = createObject(rand)
    randomArray.push(ob)
}
console.log('randomArray :', randomArray)