
// 1
let a = prompt();
if (a > 0) {
    let ggg = function () {
        console.log("!")
    }
    ggg()
} else {
    let ggg = function () {
        console.log("!!")
    }
    ggg()
}


// 2
let jd = [];
for (let i = 0; i < 10; i++) {
    jd[i] = 'x';
}
console.log(jd)

// 3
function err() {
    let w = 1;
    return function () {
        return w++
    }
}
let func = err();
console.log(func())
console.log(func())
console.log(func())
console.log(func())
console.log(func())
console.log(func())