//math.abs function return absoulate value thats mean positive value:
/* var number = -12;
console.log(Math.abs(number)); //output will 12 */

//matn.ceil value make upper upper number in faction number for example:

/* var number = 3.10;

console.log(Math.ceil(number));//output will 4 here take uper round nuber */

//math.floor show lower round number in fraction number for example:

/* var number = 3.99;
console.log(Math.floor(number));//here output will show 3 */

//math.round show round number

/* var number = 12.49;
console.log(Math.round(number)); //output will show 12 */

/* var number = 12.51;
console.log(Math.round(number)); //output will show 13 */

// math.random use genarate random number for example:
/* var number = Math.random() * 10;
var roundNumber = Math.round(number);
console.log(roundNumber); */

//for make round more tiime using loop
/* const selected = [];
for (let i = 0; i < 5; i++) {
    var number = Math.random() * 10;
    var roundNumber = Math.round(number);
    if (selected.indexOf(roundNumber) == -1) {
        selected.push(roundNumber);
    }
    else {
        console.log('found duplicate', selected, roundNumber)
    }

}
console.log(roundNumber); */





