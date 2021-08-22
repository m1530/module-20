/* let myArray = [1, 2, 3, 4, 5, 6, 7, 8];

var sum = 0;
for (let i = 0; i < myArray.length; i++) {
    sum = sum + myArray[i];

    let max = Math.max(myArray[i]);
    console.log(max);
} */
// console.log(sum);

// let myArray = [1, 2, 3, 4, 5, 6, 7, 8];


// function findLargest(number) {
//     var largest = number[0];
//     for (let i = 0; i < number.length; i++) {

//         var element = number[i];
//         if (element < largest) {
//             largest = element;
//         }
//     }
//     return largest;
// }

// var lar = findLargest([3, 23, 33, 44, 55, 111, 75, 8]);
// console.log(lar);

//find largest number in array

/* function findLargestNumber(numbers) {

    for (let i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        //console.log(element);
        var largest = 0;
        if (element > largest) {
            largest = element;
        }
    }

    return largest;
}
console.log(findLargestNumber([13, 24, 35, 46])); */
// find lowest number
function findLargestNumber(numbers) {

    for (let i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        //console.log(element);
        var largest = numbers[0];
        if (element < largest) {
            largest = element;
        }
    }

    return largest;
}
console.log(findLargestNumber([13, 24, 35, 4]));