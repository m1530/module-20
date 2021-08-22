//loop
/* 
let number = 6;
let factorial = 1;
for (let i = 1; i <= number; i++) {
    factorial = factorial * i;
}
console.log(factorial); */


//using function

/* function findFactorial(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
console.log(findFactorial(6)); */
//foor loop reverse
/* function findFactorial(num) {
    let factorial = 1;
    for (let i = num; i >= 1; i--) {
        factorial = factorial * i;
    }
    return factorial;
}
console.log(findFactorial(4)); */

//factorial using recursive function

function findFactorial(num) {
    if (num == 1) {
        return 1;
    }
    return num * findFactorial(num - 1);
}
console.log(findFactorial(5));


