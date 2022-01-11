//ES6+ Assignment Questions

// convert  es5 to es6

/*

var aloo = 1;
if (aloo == 1) {
   var a = 2;
   console.log(a);
}
console.log(aloo);

*/
// Solved 
var aloo = 0 ;
if(aloo == 1) console.log(2)

/*
var multiply = function(x, y) {
  return x * y;
};

*/


var multiply = (x,y) =>  x * y
console.log(multiply(4,5)); // result 20


/*
var customer = {
  name: "Bhaalo"
};
var card = {
  amount: 20,
  product: "Aaalo",
  unitprice: 50
};
var message = "Hello " + customer.name + " wants to buy " + card.amount + " " + card.product + " for price of " + card.unitprice + " per piece"
*/

var customer = {
    name: "Bhaalo"
  };
  var card = {
    amount: 20,
    product: "Aaalo",
    unitprice: 50
  };

const {name} = customer;
const {amount,product,unitprice} = card
var message = `Hello ${name} wants to buy ${amount} ${product} for price of ${unitprice} per piece `;

message // output

/*
var Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"],
CEO = Neog[0],
Mentor = Neog[2];
*/
var [CEO,,Mentor] = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"];
console.log(CEO);
console.log(Mentor);


/*
var arr = ["MA", "TA", "PA", "CA"];
var firstName = arr[0],
var surname = arr[1];
console.log(firstName);
console.log(surname);
*/

let [firstName,surname] = ["MA", "TA", "PA", "CA"];

console.log(firstName);
console.log(surname);


/*
var Aaloo = "Tasty";
var Bhaloo = "Cute";
var Obj = {
  Aaloo: Aaloo,
  Bhaloo: Bhaloo
};
*/

var Aaloo = "Tasty" , Bhaloo = "Cute";
var Obj = { Aaloo,Bhaloo};
Obj


/*
var a = 5;
var b = 10;
console.log("Fifteen is ".concat(a + b, " and n0t ").concat(2 * a + b, "."));
*/
let a = 5,b = 10;
console.log("Fifteen is ".concat(a + b, " and n0t ").concat(2 * a + b, "."));
console.log(`Fifteen is ${a+b} and n0t ${2*a+b}. `);

/*
var arithmeticsObj = {
  sum: function sum(num1, num2) {
    return num1 + num2;
  },
  multiply: function multiply(num1, num2) {
    return num1 * num2;
  }
};
*/


let arithmeticsObj = {
    sum: (num1, num2) =>  num1 + num2,
    multiply:(num1, num2) => num1 * num2
  };


 /*
  var avengers = {
  operation: "Assemble",
  members: [
    {
      ironMan: "Tony Stark"
    },
    {
      captainAmerica: "Steve Rogers"
    },
    {
      blackWidow: "Natasha Romanoff"
    }
  ]
};
var operation = avengers.operation,
  members = avengers.members;
*/

let {operation,members} = {
    operation: "Assemble",
    members: [
      {
        ironMan: "Tony Stark"
      },
      {
        captainAmerica: "Steve Rogers"
      },
      {
        blackWidow: "Natasha Romanoff"
      }
    ]
  };


console.log(operation);
console.log(members);

// convert  es6 to es5

/*
const packIt = (...args) => console.log(args)
*/

function packIt (list){
    console.log(list);
}
let list = [1,2,3,4,5,6];

packIt(list);


/*
const hello = () => "Hello"
const welcome = () => "Welcome"
const [Hello = hello(), Welcome = welcome()] = ["Namaste"]
console.log(Hello, Welcome)
*/

//ANS 
//without checking output my output is  Namaste Welcome

/*
const obj = {
    aloo : 1,
    bhallo : 2
}

const {c : aloo = [2,3,4].push(5), aloo} = obj 

console.log(aloo)
*/

// before solving this question.sir you told this ans  
