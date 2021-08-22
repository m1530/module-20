//1.string, number, boolean type of veriable declear.

/* let stringTypeOfVeriable = 'name';
let numberTypeOfVeriable = 23;
let booleanTypeOfVeriable = true; */

//২. তুমি কি জানো কখন let দিয়ে ভেরিয়েবল লিখতে হয়ে আর কখন const দিয়ে ভেরিয়েবল লিখতে হয়। যদি লিখতে পারো তাহলে লিখে ফেলো। এবং যেই যেটা দিয়ে ভেরিয়েবল লিখলে আবার সেটা চেইঞ্জ করা যায়। তাহলে যেটা দিয়ে ভেরিয়েবল ডিক্লেয়ার করলে চেইঞ্জ করা যায়। সেটার মান চেইঞ্জ করে নাও । অর্থাৎ জাস্ট দুইটা ভেরিয়েবল ডিক্লেয়ার করবে let এবং const দিয়ে। তারপর যেকোন একটার ভ্যালু চেইঞ্জ করবে। এই let এবং const মাথা গরম করে দিলে টেনশন নিয়ে না। সামনের মাইলস্টোন এর পরের মাইলস্টোন এ এইটা নিয়ে আরো ডিসকাস করা হবে। 

/* let number = 67;
const number2 = 334;
 */
//console.log(number, "and", number2);
//number2 = 565;
/* number = 33;
console.log(number); */

//৩. দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, % এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো। 

/* let number1 = 10;
let number2 = 12;

let sum = number1 + number2;
console.log(sum);

let sub = number1 - number2;
console.log(sub);

let mul = number1 * number2;
console.log(mul);

let div = number1 / number2;
console.log(div);

// let mod = number1 % 2 == 0;
// console.log(mod);
let mod = number2 % 2 == 0;
console.log(mod); */

//৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো। 


/* let number1 = 20;
let number2 = 30;

function tuluna(num1, num2) {
    if (num1 < num2) {
        return num2;
    }
    return num1;
}
let result = tuluna(15, 12);
console.log(result); */
/* if (number1 > number2) {
    console.log(number2);
}
else {
    console.log(number1);
} */

/* if (number1 >= number2) {
    console.log(number1);
}
else {
    console.log(number2);
} */
/* if (number1 <= number2) {
    console.log(number1);
}
else {
    console.log(number2);
} */
/* number1 = 22;
number2 = 21;
if (number1 == number2) {
    console.log(true);
}
else {
    console.log(false);
} */

//৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো। 

/* let year = 2100;
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log('leap year');
} else {
    console.log('nat a leap year');
} */

//৬. তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো 
/* let year = 2100;
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log('leap year');
} else {
    console.log('nat a leap year');
} */

//৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো। 

/* let num = 7;

while (num <= 19) {
    if (num % 2 == 1) {
        console.log(num);
    }
    num++;
} */

//৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 

/* let arr = [12, 34, 56, 32, 45, 77, 31, 99, 15];

let totalNum = arr.length;
//console.log(totalNum);
arr[4] = 50;
arr.push(100);
arr.push(500);
arr.pop();
console.log(arr); */

//৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো। 

//let names = ['kamal', 'jamal', 'rahim', 'karim', 'jalil', 'saleh'];

/* for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
} */

/* for (const name of names) {
    console.log(name);
} */

//১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 

//find aray average

/* let sum = 0;
let gor = 0;
function avarage(arr) {
    for (const avg of arr) {
        sum = sum + avg;
        gor = sum / arr.length;
    }
    return [sum, gor];
}

console.log("sum of total=", avarage([4, 5, 22, 33, 444, 66, 2222, 666, 77, 80, 83, 99, 100, 200, 88, 89]));
 */
/* let arr = [4, 5, 22, 33, 444, 66, 2222, 666, 77, 80, 83, 99, 100, 200, 88, 89];

let largest = arr[0];
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
     if (element >= 80) {
        console.log(element);
    }
    if (element >= largest) {
        largest = element;

    }
} console.log(largest); */

/* function aboveEighty(arr) {
    const number = [];
    for (let i = 0; i < arr.length; i++) {

        const element = arr[i];
        //console.log(element);
        if (element >= 80) {
            number.push(element);
        }
    }
    return number;
}
console.log(aboveEighty([4, 5, 22, 33, 444, 66, 2222, 666, 77, 80, 83, 99, 100, 200, 88, 89])); */

//১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো। 

/* function addition(num1, num2, num3) {
    let result = num1 * num2 * num3;
    return result;
}

console.log(addition(2, 3, 4)); */


/* ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা।  */

/* let mobileDetails = [
    { name: 'iphone', price: 2000, ram: 2 },
    { name: 'samsung', price: 3000, ram: 4 },
    { name: 'saomi', price: 4000, ram: 6 },
    { name: 'oppo', price: 5000, ram: 8 },
    { name: 'htc', price: 6000, ram: 16 },
];
for (const mobile of mobileDetails) {
    let mobNme = mobile;

}
mobileDetails[3].name = 'walton';
console.log(mobileDetails); */


// console.log(mobileDetails[0].name);

//১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়। 

/* function feetToInch(feet) {
    let inch = feet * 12;
    return inch;
}

console.log(feetToInch(11)); */

//২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। 

/* function centimeterToMeter(centiMetter) {
    let metter = centiMetter / 100;
    return metter;
}
console.log(centimeterToMeter(250)); */


/* ৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে।

এইবার ভালো করে খেয়াল করো।

প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা

সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা

তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা



এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে।

উত্তর হিসেবে সংখ্যা রিটার্ন করবে। */

/* function paperRequirements(firstBookCopy, secondBookCopy, thirdBookCopy) {
    let firstBookPages = 100;
    let secondBookPages = 200;
    let thirdBookPages = 300;
    let firstBookNeedPages = firstBookPages * firstBookCopy;
    let secondBookNeedPages = secondBookPages * secondBookCopy;
    let thirdBookNeedPages = thirdBookPages * thirdBookCopy;

    const totalPages = firstBookNeedPages + secondBookNeedPages + thirdBookNeedPages;
    return totalPages;
}

console.log(paperRequirements(4, 3, 5)); */



//৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 
//let arrayName = ['kamal','jamal', 'salehk', 'rahman','roky', 'htc','smashikul','kawserk','shafik'];


/* function bestFriend(arrayName) {
    let bigNmae = arrayName[0];
    for (oldestFriend of arrayName) {
        //console.log(oldestFriend);
        if (bigNmae.length <= oldestFriend.length) {
            bigNmae = oldestFriend;
        }
    }
    return bigNmae;
}
let allFriendName = ['kamal', 'jamal', 'saleh', 'rahmanfsdfsddsszdgsgs', 'roky', 'htc', 'smashikul', 'kawserk', 'shafik'];

console.log(bestFriend(allFriendName));
 */





//৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য এর চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 

// let number = [3,4,2,66,33,-1,8,24,80,100];

function checkNumber(numbers) {
    let positiveNumber = [];
    for (number of numbers) {
        //console.log(number);
        if (positiveNumber.indexOf(number) == -1 && number > 0) {
            positiveNumber.push(number);
        }
        if (number < 0) {
            break;
        }
    }
    return positiveNumber;
}

let arrayNumber = [3, 4, -9, 2, 66, 33, -1, 8, 24, 80, 100];

console.log(checkNumber(arrayNumber));