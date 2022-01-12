//Easy
//Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.
let sum = 0;
const sumNum = (...arg) => { 
   for( item of arg ){
     sum = sum + item;
   }
   return sum;
 }

console.log(sumNum(1,2,3,4,5,6));
     
//Write a program to take a number input from user and determine whether the number is odd or even.

//const askInput = prompt("Please enter number");
const askInput = 5;  
const result = askInput % 2 == 0 ? 'even' :'odd';
console.log(result);


//Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.
//const findMax = (num1,num2) => num1 > num2 ? ` ${num1} is greater than  ${num2} `:`${num2} is greater than  ${num1} `

//Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.
/*const findMax = (num1,num2,num3) => {
    if( num1 > num2 && num1 > num3 ){
      return num1;
    }else if( num2 > num1 && num2 > num3  ){
      return num2;
    }else{
      return num3;
    }
  }
*/
/*  const findMax = (num1,num2,num3) => {
  num1 = num1 > num2 ? num1 :num2;
   num2 = num2 > num3 ? num2 :num3;
   return num2 > num3 ? num2 :num3;
}*/

//Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.
/*
const findMin = (num1,num2,num3) => {
    if( num1 < num2 && num1 < num3 ){
      return num1;
    }else if( num2 < num1 && num2 < num3  ){
      return num2;
    }else{
      return num3;
    }
}
*/

//Write program to take a month as an input from the user and find out whether the month has 31 days or not.
/**
const passMonth = askMonth => ( askMonth !== 2 || askMonth !== 4 || askMonth !==6 || askMonth !== 9 || askMonth !== 11  ) ? 'Given month has 31 days':'Given month has not 31 days' 
const askMonth = prompt('Please Enter month');
const result = passMonth(askMonth);
*/

/* 
Intermediate Question
*/
/*
//Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".
*/
/*
for (let i = 1; i <= 100; i++) {
  let out = '';
  if (i % 3 === 0) out += 'Fizz';
  if (i % 5 === 0) out += 'Buzz';
  console.log(out || i);
}
*/

/**
Print the following star pattern :-

*
* *
* * *
* * * *
* * * * *
for( i =1;i <=6;i++ ){
  sum = sum + '*';
  console.log(sum);
}


* * * * *
* * * * 
* * *
* * 
* 

let k , l;
for( k =5; k > 0;k-- ){
  let sum1='';
  for(l = k; l > 0 ; l-- ){
      sum1 = sum1 + '*';
  }
   console.log(sum1);
}

    *
   **
  ***
 ****
*****

let k , l,clone='';
for( k =5; k > 0;k-- ){
  let sum1='';
  clone = clone + '*';
  for(l = k-1; l > 0 ; l-- ){
      sum1 = sum1 + ' ';
  }
   console.log(sum1+clone);
}


 */





