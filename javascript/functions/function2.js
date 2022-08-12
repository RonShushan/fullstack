var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];


function printLoop() {
    for (var i = 0; i < arr.length; i++) {
        printVar(arr[i])
    }
}

function printVar(num) {
    var n = num * 5
    console.log(n)
}

printLoop()
console.log('-----------')
printLoop()