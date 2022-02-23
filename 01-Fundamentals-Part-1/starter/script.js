// 'use strict'
// // let js = 'amazing';
// // if (js === 'amazing') alert('js is fun!');
// console.log(40 + 8 + 23 - 10);
// console.log('Jonas');
// console.log(23);
// // let firstName = 'Trevor';
// // console.log(firstName);
//
// let marksWeight = 95;
// let marksHeight = 1.88;
// let johnsWeight = 85;
// let johnsHeight = 1.76;
//
// let marksBMI = marksWeight / marksHeight ** 2
// console.log(marksBMI);
// let johnsBMI = johnsWeight / johnsHeight ** 2
// console.log(johnsBMI);
//
// let markHigherBMI = (marksBMI > johnsBMI)
// console.log(markHigherBMI);
//
// if (marksBMI > johnsBMI) {
//     console.log(`Marks BMI ${marksBMI.toFixed(2)} is higher than Johns BMI of ${johnsBMI.toFixed(2)}.`);
// } else {
//     console.log(`Johns BMI of ${johnsBMI.toFixed(2)} is higher than Marks BMI of ${marksBMI.toFixed(2)}.`);
// }
//
// let k;
// let y = [];
// let x = '';
// console.log(typeof k);
// console.log(k);
// console.log(typeof y);
// console.log(y);
// console.log(typeof x);
// console.log(x);
// console.log("coding challenge 3");
// let dolScores = [96, 108, 89];
// let kolScores = [88, 91, 110];
// let avgDolScr = function() {
//     let runningTotal = 0;
//     for (let i = 0; i < dolScores.length; i++) {
//         runningTotal += dolScores[i] / dolScores.length;
//         console.log(runningTotal);
//     }
// }
// avgDolScr();
// let avgKolScr = function() {
//     let runningTotal = 0;
//     for (let i = 0; i < kolScores.length; i++) {
//         runningTotal += kolScores[i] / kolScores.length;
//         console.log(runningTotal);
//     }
// }
// avgKolScr();
// if(avgDolScr > avgKolScr){
//     console.log("Dolphins Win");
// }else {
//     console.log("koalas win");
// }
// ///////////// TEMPLATE LITERALS  ///////////////
// // const firstName = 'Jonas';
// // const job = 'teacher';
// // const birthYear = '1991';
// // const year = 2037;
//
// // const jonas = "I'm " + firstName + ',a ' + (year - birthYear) + ' year old ' + job + '!';
// // console.log(jonas);
// //
// // const jonasTempLit = `I'm ${firstName.toUpperCase()} a ${year - birthYear} year old ${job}!`;
// // console.log(jonasTempLit);
// //
// // console.log(`You can use backticks for any regular string`);
//
// //////  multi line string regular way //////
//  console.log('string with \n\
// multiple \n\
// lines');
//
// console.log(`template literal string
// with multiple lines
// of text`);
//
// // const age = 15;
// // const isOldEnough = age >= 18;
//
// // if(age >= 18){
// //     console.log('Sarah can start driving 👺');
// // }else{
// //     const yearsLeft = 18 - age;
// //     console.log(`Sarah is too young 👎🏻. She must wait ${yearsLeft} more years 😄`);
// // }
// ////// emojis are control/command/shift ///////////
// const birthYear = 1991;
//
// let century ;
//
// if(birthYear <= 2000){
//     century = 20;
// }else{
//      century = 21;
// }
// console.log(century);
//
// /////// TYPE CONVERSION AND COERCION ///////// NAN IS AN INVALID NUMBER, BUT TYPEOF IS STILL A NUMBER ////////
//
// const inputYear = '1991';
// console.log(inputYear);
// console.log(typeof inputYear);
// console.log(Number(inputYear));
// console.log(typeof Number(inputYear));
// console.log(parseInt(inputYear));
// console.log(typeof parseInt(inputYear));
// console.log(inputYear + 18);
// console.log(String(23), 23);
//
// let n = '1' + 1;
// n = n - 1;
// console.log(n);
// ///////// TRUTHY AND FALSEY VALUES  ///////////
// /////  5 FALSEY VALUES 0,"", UNDEFINED, NULL, NaN ///////// CONVERT TO FALSEY IN BOOLEAN ///////////
//
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('string'));
// console.log(Boolean(''));
// console.log(Boolean({}));
// console.log(Boolean(null));
//
// const money = 0;
// if(money ){
//     console.log(`don't spend it all`);
// }else{
//     console.log(`get a job`);
// }
//
// let height;
// if(height){
//     console.log(`yay height is defined`);
// }else{
//     console.log(`height hasn't been defined`);
// }
// // const age = '18';
// if(age === 18) console.log(`you're an adult`); //// strict equality
//
// if(18 === age) console.log(`youre an adult`);  //// loose equality
//
//
// // const favoriteNumber =Number(prompt(`whats your favorite number?`));
// // console.log(favoriteNumber);
//
// // if(favoriteNumber === 23){
// //     console.log(`cool`)
// // }else if(favoriteNumber === 7){
// //     console.log(`7 is cool too`);
// // }else{
// //     console.log(`number isn't 23 or 7`);
// // }
// //
// // if(favoriteNumber !== 23) console.log(`why not 23?`);
//
// ////////// BOOLEAN LOGIC   ////////////////
//
// const hasDriversLicense = true;
// const hasGoodVision = false;
// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// const shouldDrive = hasDriversLicense && hasGoodVision;
//
// if(shouldDrive && hasGoodVision){
//     console.log('Sarah is able to drive!')
// }else{
//     console.log('Someone else should drive');
// }
//
// const day = 'wednesday';
//
// switch (day){
//     case 'monday':   // day === 'monday'
//         console.log('Hey its monday');
//         console.log('go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('heys its tuesday');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('write code examples');
//         break;
//     case 'friday':
//         console.log('record lecture videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('enjoy the weekend');
//         break;
//     default:
//         console.log('everyting else falls through to the default');
// }
//
// if( day === 'monday'){
//     console.log('hey its monday');
// }else if(day === 'tuesday'){
//     console.log('hey its tuesday')
// }else if( day === 'wednesday' || day === 'thursday'){
//     console.log('write some code examples');
//
// }else{
//     console.log('enjoy the weekend');
// }
//
// //////// Statments and Expressions ///////
// /// if it ends with a semicolon its a statement
// /// if it produces a value its an expression
// /// in a template literal you can only insert expressions, not statements
//
// console.log(`I'm ${2023 - 1976} years old!`)
//
// /////Ternary Operators///////
// /////Operator always produce a value
const age = 17;
age >= 18 ? console.log('I like to drink wine'): console.log('I like to drink water');

 const drink = age >= 18 ? 'wine':'water';
console.log(drink);

////Ternaries are expressions which allows them to be used inside template literal as a conditional statement/////

console.log(`I like to drink ${age >= 18 ? 'wine':'water'} llll`);
let totalBill = 435;

let tip = totalBill >= 300 && totalBill <= 50 ? `${totalBill * .15}`: `${totalBill * .20}`;

console.log(tip)

const myStr = "coding is fun, isn't it?"
console.log(myStr.search('is'));