'use strict';

let hasDriversLicense = false;
const passTest = true;

if(passTest)hasDriversLicense = true;
if(hasDriversLicense) console.log('i can drive');

////strict mode also has some new key words set aside for future releases/////

// const interface = 0;   //Both are future reserved//
// const private = 543;

function logger(){
    console.log('my name is trevor');
}
//calling running or invoking the function
logger();
logger();
logger();

///parameters are defined in the function call///
function fruitProcessor (apples,oranges){
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}
////the actual values of the parameters are called arguments///
 const appleJuice = fruitProcessor(5,0);
/// to use the return VALUE FROM THE FUNCTION WE STORE IT IN A VARIABLE===>>>
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(3,5);
console.log(appleOrangeJuice)