/* const fibo = [0, 1];
var num = 44;

for (let i = 2; i < num; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo); */



function fabonacci(n) {
    const fabo = [0, 1];
    for (let i = 2; i < n; i++) {
        fabo[i] = fabo[i - 1] + fabo[i - 2];
    }
    return fabo;
}
console.log(fabonacci(12));