// 'use strict';
//
// let hasDriversLicense = false;
// const passTest = true;
//
// if(passTest)hasDriversLicense = true;
// if(hasDriversLicense) console.log('i can drive');
//
// ////strict mode also has some new key words set aside for future releases/////
//
// // const interface = 0;   //Both are future reserved//
// // const private = 543;
//
// function logger(){
//     console.log('my name is trevor');
// }
// //calling running or invoking the function
// logger();
// logger();
// logger();
//
// ///parameters are defined in the function call///
// function fruitProcessor (apples,oranges){
//     const juice = `juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }
// ////the actual values of the parameters are called arguments///PARAMETERS ARE PLACEHOLDERS
//  const appleJuice = fruitProcessor(5,0);
// /// to use the return VALUE FROM THE FUNCTION WE STORE IT IN A VARIABLE===>>>
// console.log(appleJuice);
//
// const appleOrangeJuice = fruitProcessor(3,5);
// console.log(appleOrangeJuice)
// ////FUNCTION DECLARATION//////
// function calcAge1(birthYear){
//     return 2037 - birthYear;
// }
// const ageOne = calcAge1(1976);
//
// console.log(ageOne)
//
// /////FUNCTION EXPRESSION////REMEMBER THAT EXPRESSIONS ALWAYS RETURN A VALUE/////
// ////REMEMBER DECLARATIONS CAN BE INVOKED PRIOR TO BEING DEFINED/INITIALIZED
//
// const calcAgeTwo = function (birthYear){
//     return 2037 - birthYear;
// }
// const ageTwo = calcAgeTwo(1976);
// console.log(ageTwo)
//
// ///////ARROW FUNCTIONS/////SHORTHAND FUNCTION EXPRESSION///ARROW FUNCTIONS DO NOT GET TO USE THIS KEYWORD
//   /////GREAT FOR ONE LINE CODE BLOCKS/////
// const calcAge3 = birthYear => 2037 - birthYear
// const ageThree = calcAge3(1976);
// console.log(ageThree);
//
// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037-birthYear;
//     const retirement = 65-age;
//     return `${firstName} retires in ${retirement} years`;
// }
// const retirementTrevor = yearsUntilRetirement(1976,'trevor');
// const retirementKristin = yearsUntilRetirement(1970,'kristin');
//
// function cutFruitPieces(fruit){
//     return fruit * 4
// }
//a
// function fruitProcessor (apples,oranges){
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
//     return juice;
// }
//
// console.log(fruitProcessor(2, 3));
//
//

// const calcAverage = (a,b,c) => (a+b+c)/3;
// console.log(calcAverage(4,5,6));
//
// let scoreDolphs = calcAverage(44,23,71);
// let scoreKoalas = calcAverage(65,54,49);
// console.log(scoreDolphs);
// console.log(scoreKoalas);
// const checkWinner = function (avgDolphs,avgKoals){
//     if(avgDolphs >= 2* avgKoals){
//         console.log('Dolphs win');
//     }else if(avgKoals >= 2* avgDolphs){
//         console.log('Koalas win');
//     }else{
//         console.log('no team wins');
//     }
// }
// checkWinner(scoreDolphs,scoreKoalas);
// checkWinner(200,50);
// checkWinner(50,200);
//
// scoreKoalas = calcAverage(85,54,41);
// scoreDolphs = calcAverage(23,34,27);
// checkWinner(scoreDolphs,scoreKoalas);

 // const friendsArray = ['alex', 'aaron', 'david', 'willie', 'jimmy'];
// console.log(friendsArray);
//
// const years = new Array(1991,1992,1993,1994,1995);
//
// console.log(friendsArray.length);
// console.log(friendsArray[friendsArray.length - 1]);
// console.log(friendsArray[5]);
//
// friendsArray[2] = 'jay';
// console.log(friendsArray);
//
// friendsArray.push('trevor');
// console.log(friendsArray);

// const jonas = ['jonas', 'schmedtmann', 2037-1991,'teacher', friendsArray];
// console.log(jonas);
//
// const calcAge = function (birthyear){
//     return 2022-birthyear;
// }
// const years = [1991,1992,1993,1994,1995];
//
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[2]);
// const age4 = calcAge(years[3]);
// console.log(age1,age2,age3,age4);
//
// const ages = [age1,age2,age3,age4];
// ////or
// const agesII = [years[0],years[1],years[2],years[3]];
//
// console.log(ages,agesII);

const friendsArray = ['alex', 'aaron', 'david', 'willie', 'jimmy'];
friendsArray.push('korbin');
console.log(friendsArray);
let popped = friendsArray.pop();
console.log(popped);
console.log(friendsArray);
let shifted = friendsArray.shift();
console.log(shifted);
console.log(friendsArray);
friendsArray.unshift('randall');
console.log(friendsArray);
friendsArray.push('23');
console.log(friendsArray.indexOf('randall'));
console.log(friendsArray.includes('johnny'));
console.log(friendsArray.includes(23));