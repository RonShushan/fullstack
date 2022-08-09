var forLoopArray = []
var count = 0
var countArr = [5, 10, 15, 20, 25];
var random = 0
var randomArray = []
console.log(random)

for (i = 0; i < 10; i++) {
    random = Math.floor(Math.random() * 100)
    random -= random % 10
    randomArray.push(random)
}
console.log(randomArray)