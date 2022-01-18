/*
Write a program to input 2 numbers and display the sum of the numbers to the console.

Input Number 1: 20
Input Number 2: 40
Sum : 60
*/


const sum = (num1 , num2) => num1 + num2 

/*
Write a JavaScript program to calculate the simple interest given P,R,T with the given formula. Formula: SI = (P * T * R) / 100 Where: P = principal amount T = time R = rate SI = simple interest

Input: P=100, R=6%, T=2
Output: 12
*/

//Here P for principal , r for rate and t for time
const calculateSI = (p , r , t ) =>  (p * t * r) / 100

console.log(calculateSI(100,6,2));


/*

Write a program to calculate the kinetic energy of a body with mass 'm' and volume 'v'.

Formula : 0.5 * m * v * v

*/

//here m  is mass and v for volume
const calKinEnegy = (m, v) => 0.5 * m * v * v


/**
 Write a program to convert Fahrenheit to Celsius. For Fahrenheit to Celsius conversion use: C = (F - 32) * 5/9 'F' and 'C' are the temperatures on the Fahrenheit scale and Celsius scale respectively.

Input: 56
Output: 13.33333
 
*/
const fToC = (f) => (f - 32) * 5/9 
console.log(fToC(56).toFixed(2));






/*
Calculate the area, perimeter of a square of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.

Formula :

Area: a*a

Perimeter: 4*a

Surface Area: 6*a*a

Volume: a*a*a
*/


const Area = a => a * a

const perometer = a => 4 * a

const surfaceArea = a =>  6 * a * a

const volume = a =>  a * a * a


/*

Given the Cost Price(CP) and Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss.

Input: CP = 1500, SP = 2000
Output: 500 Profit
Input: CP = 3125, SP = 1125
Output: 2000 Loss
*/


const calculateProfit = (cp ,sp) => sp - cp 

const calculateLoss = (cp ,sp) => cp - sp 



/*
Write a program to calculate sum of N natural digits, as input by the users?

Enter a positive integer: 100
Sum = 5050
*/

const naturalSum = (num) => {
    
    if(num <= 0){
        return "Not a Natural digits"
    }else{
        let sum = 0;
        for(let i = 1 ; i <= num;i++){
            sum = sum + i;
        }
        return sum;
    }
}
console.log(naturalSum(100));

/*

Write a Program to Print N Odd Number in Descending Order.

Input : 4
Output : 7
5
3
1
*/

const printOdd = num => {
    let i,a;
    for(i = num-1 ; i >= 0 ; i-- ){
        a = 1 + i * 2; 
        console.log(a);
    }
}

console.log(printOdd(4));


/*
Write a JavaScript program to compute the sum of all digits that occur in a given string.
Input: 1234
Output: 1+2+3+4 = 10
*/

const sumString = str => {
    let sum = 0,i;
    for(i = 0; i < str.length-1 ;i++){
        sum = sum +  ( str[i] -  0 );
        console.log(str[i]);
    }
    return sum ;
} 
console.log(sumString('12345'));

/*
Write a JavaScript program that reverses a number.
Example:

Input:  32243;
Output:  34223
*/

const revStr = num => {
    var digit, result=0;

    while( num ){
        digit = num % 10  ;
        result = (result * 10) + digit ; 
        num = num / 10 | 0 ;
    }  
  
    return result; 
}
console.log(revStr(12365));

/*
Write a Program to cyclically Rotate a Number by X positions in the left direction, as provided by the user.

Example-

Enter a Number : 1234
Enter the Number of Rotations : 2
Output : 3412

*/


/*
Write a Program to convert Decimal to Binary.

Enter the number to convert: 5
Binary of Given Number is=101
Follow up Question : Write a Program to Convert Octal to Decimal.

Enter an octal number: 116
Octal of Given Number = 78 in decimal

*/