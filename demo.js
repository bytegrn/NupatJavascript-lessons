// // // Primitives
// // // Objects

// // // Primitives

// // // primitves are single values

// // // values are known as data

// // // 5 primitve data types

// // /**
// //  * 1. string
// //  * 2. number
// //  * 3. boolean
// //  * 4. null
// //  * 5. undefined
// //  */

// // // Strings

// // "shola";
// // "shola";

// // // Number
// // 500;
// // 3.14;

// // // Boolean

// // true;
// // false;

// // // null

// // null;

// // // undefined

// // undefined;

// // // variables

// // // defining variables

// // /**
// //  * let
// //  * const
// //  * var
// //  */

// // // let myName = "Shola";
// // // const userName = "Lara";

// // // // console
// // // // ReAssignment
// // // myName = "Green";
// // // console.log(myName); // Green
// // // variables
// // /* Variables are named storage location for data in memory*/

// // // 3 keywords to create variables in javascript
// // // var // older
// // // let
// // // const

// // // syntax

// // // let myName = "Bright"; // creation and assignment
// // // console.log(myName);
// // // // reassignment
// // // myName = "Micah";
// // // // ffggghghhhg
// // // /*
// // // iiiiji
// // // kijijij
// // // jkjkkkll */
// // // console.log("The boy's name is ", myName);
// // // myName = 'Shola';

// // // let price; // created a variable
// // // console.log(price);
// // // price = 100;
// // // console.log(price);

// // // const price = 100;
// // // console.log(price);

// // // values => data-types

// // // Reference types
// // // objects;
// // // arrays;
// // // functions;

// // const obj = {}; //object literal
// // // const obj2 = new Object() // Object constructor

// // // const car = {
// // //   //properties
// // //   noOfWheel: 4,
// // // };

// // // name
// // // color
// // // model

// // // const carName = "lexus";
// // // const carColor = "black";
// // // const carModel = "RX-350";

// // const car = {
// //   name: "lexus",
// //   color: "black",
// //   model: "RX-350",
// // };

// // // car = "something else";

// // // access/update

// // // 1. dot notation

// // // const carName = car.name;
// // // car.name = "Benz";

// // // console.log(car);

// // // 2. bracket

// // // const getAProp = prompt("what so you need?");

// // // console.log(car[getAProp]);

// // // console.log(car);

// // // Arrays

// // // Syntax

// // // 1.  []
// // // 2. new Array

// // const groceryList = ["Milk", "Fruits", "Beverages", "Juice"];

// // // length
// // // index - starts from 0

// // const lengthOfList = groceryList.length;

// // // access/update
// // // const accessedItems = [
// // //   groceryList[0],
// // //   groceryList[1],
// // //   groceryList[2],
// // //   groceryList[3],
// // // ];

// // // groceryList[0] = "bread";

// // // console.log(groceryList);

// // // Functions

// // // Syntax

// // // function sayHi(name) {
// // //   console.log("Hi " + name);
// // //   // alert("Hi");
// // // }

// // // Parameters and Arguments

// // // invoke/call
// // // sayHi("Bright");
// // // sayHi("Deola");
// // // sayHi("Micah");
// // // sayHi("Shola");

// // // Strings and String-Methods

// // /**
// //  * 1. uppercase
// //  * 2. lowercase
// //  * 3. charAt
// //  * 4. indexOf
// //  * 5. repeat
// //  */

// // const str = "good";
// // const all = "everyone";

// // // charAt method
// // // str = str.charAt();
// // // indexOf method
// // // str = str.indexOf("d");

// // const posOfN = str.indexOf("n");
// // const letterN = str.charAt(posOfN);

// // // length property

// // // Returns the number of characters in a string
// // const noOfCharInStr = str.length;

// // // concat method

// // const greeting = str.concat(" morning ", ", ", all);

// // // endsWith and startsWith

// // let myName = "        bright       ";

// // const res = myName.endsWith("f");
// // const res2 = myName.startsWith("g");

// // // slice method
// // const partOfMyName = myName.slice(0, 3);

// // // split method
// // const splittedStr = myName.split("+");

// // // includes method
// // const ans = myName.includes("@gmail.com");

// // // trim
// // myName = myName.trim();
// // console.log(myName.length);

// let fName = "BRight";
// let lName = "   greEEN    ";

// // trim of spaces
// // get the first letter convert it to uppercase
// // get the remaining letters and then convert it to lowercase

// fName =
//   fName.trim().charAt(0).toUpperCase() + fName.trim().slice(1).toLowerCase();
// lName =
//   lName.trim().charAt(0).toUpperCase() + lName.trim().slice(1).toLowerCase();

// const fullName = fName.concat(" ", lName);

// // fName = fName.trim();
// // fName = fName.charAt(0).toUpperCase() + fName.slice(1).toLowerCase();
// console.log(fullName);

// // Number methods

// // let num = "2.456msndmsds";

// // num = num.toFixed(2);
// // num = num.toExponential(2);
// // num = num.toPrecision(3);
// // num = num.toString();
// // num = num.valueOf(1);

// // Number constructor

// const maxNum = Number.MAX_SAFE_INTEGER;
// const minNum = Number.MIN_SAFE_INTEGER;

// // num = parseInt(num);
// // num = parseFloat(num);
// // num = Number("100");
// // num = Number(false);

// // Math methods

// // Math.methodName

// const PI = 2;

// let res;
// // res = Math.round(PI);

// res = Math.ceil(PI);
// res = Math.floor(PI);
// res = Math.trunc(PI);
// res = Math.abs(PI);
// res = Math.sqrt(PI);
// res = Math.pow(PI, 3);
// res = Math.max(5, 6, 8, 9);
// res = Math.min(1, 5, 6, 7);

// // random

// res = Math.random()
