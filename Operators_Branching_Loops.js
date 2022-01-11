//Easy

//Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.



//Write a program to take a number input from user and determine whether the number is odd or even.

const askInput = prompt("Please enter number");
const result = askInput % 2 == 0 ? 'even' :'odd';
console.log(result);


//Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.
const findMax = (num1,num2) => num1 > num2 ? ` ${num1} is greater than  ${num2} `:`${num2} is greater than  ${num1} `

//Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.
const findMax = (num1,num2,num3) => {
    if( num1 > num2 && num1 > num3 ){
      console.log(` ${num1} is greater than to all `);
    }else if( num2 > num1 && num2 > num3  ){
      console.log(` ${num2} is greater than to all `);
    }else{
     console.log(` ${num3} is greater than to all `);
    }
}

//Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.
const findMin = (num1,num2,num3) => {
    if( num1 < num2 && num1 < num3 ){
      console.log(` ${num1} is smaller than to all `);
    }else if( num2 < num1 && num2 < num3  ){
      console.log(` ${num2} is smaller than to all `);
    }else{
     console.log(` ${num3} is smaller than to all `);
    }
}

//Write program to take a month as an input from the user and find out whether the month has 31 days or not.

const passMonth = askMonth => ( askMonth !== 2 || askMonth !== 4 || askMonth !==6 || askMonth !== 9 || askMonth !== 11  ) ? 'Given month has 31 days':'Given month has not 31 days' 
const askMonth = prompt('Please Enter month');
const result = passMonth(askMonth);


//

 
