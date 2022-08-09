var forLoopArray = []
var count = 0
var countArr = [5, 10, 15, 20, 25];
var random = Math.floor(Math.random() * 100) + 1
console.log(random)

num = 4;
count = 0;
for (var i = 0; i < num; i++) {
    count += i * (i + 1)
    console.log("count", i, i * (i + 1))
}
console.log("total", count)