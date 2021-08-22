/* let num = -14;
console.log(Math.abs(num)); */

/* let num = 13.38243534;
console.log(Math.ceil(num)); */

/* let num = 13.38243534;
console.log(Math.floor(num)); */


/* let num = 13.38243534;
let num2 = 12.38243534;
console.log(Math.max(num, num2)); */

/* let num = 13.38243534;
let num2 = 12.38243534;
console.log(Math.min(num, num2)); */

/* let num = Math.random() * 10;
console.log(Math.round(num)); */

/* let confic = [];
for (let i = 0; i < 10; i++) {
    let ran = Math.random() * 10;
    var rannum = Math.round(ran);

    if (confic.indexOf(rannum) == -1) {
        confic.push(rannum);
    } else {
        console.log('found duplicate', confic, rannum);
    }

} console.log(rannum);
 */

const selected = []
for (let i = 0; i < 10; i++) {
    const random = Math.random() * 15;
    const picked = Math.round(random);
    if (selected.indexOf(picked) == -1) {
        selected.push(picked);
    }
    else {
        console.log('found duplicate', selected, picked)
    }
}
console.log(selected);