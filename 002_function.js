/*Given a and b, your function should return the value of ab
Example:
Input: power(2,3) ––> Output: 8
*/

const power = (num1,num2 ) => {
    let mul = 0;
    let store =0;
    for(let i = 0; i < num2-1; i++ ) {
        if( i == 0){
            mul = num1 * num1; 
            console.log(mul);
        }else{
            store = mul;
            mul = store * num1;   
            console.log(mul);
        }
        console.log(i); 
    }
    return mul;
} 


console.log(power(3,3));



/*

Given length of a regular hexagon, your function should return area of the hexagon.
Example:
Input: areaOfHexagon(10) ––> Output: 259.80
what is hexagon
The area of a hexagon is the space that is enclosed by all its sides. Hexagon is a polygon with six angles and six sides. It is derived from the Greek words "Hexa" which means "six" and "gonía" which means "corner".
Area of regular hexagon = (3√3 num2)/2

*/

const calHex = num =>  ((3 * Math.sqrt(3) *   (num * num)) / 2);  
 
/*
Given a sentence, your functions should return the number of words in the sentence.
Example:
Input: noOfWords(We are neoGrammers) ––> Output: 3
*/
const noOfWords = str =>  str.split(" ").length

console.log(noOfWords("We are GEoge"));


/*

Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
Example:
Input: findMin(3,5) ––> Output: 3
Input: findMin(3,5,9,1) ––> Output: 1
(Hint: Lookup rest parameters in JavaScript)
*/


const findMin = (...num) => {
    let min = num[0];
    for( item of num){
        if( min > item ) min = item 
        
    }
    return min;
}

console.log(findMin(1,2,3,4,5,6,));


/*
Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
Example:
Input: findMax(3,5) ––> Output: 5
Input: findMax(3,5,9,1) ––> Output: 9
(Hint: Lookup rest parameters in JavaScript)
*/

const findMaxNumber = (...num) => {
    let max = num[0];
    for(item of num){
        if(item > max) max = item 
    }   
    return max;
}

console.log(findMaxNumber(2,3,5,6,7,8,9));

/*
Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all. Example:
Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle

*/
const typeOfTriangle = (num1,num2,num3) => {
    if (num1 + num2 < num3 || num1 + num3 < num2 || num2 + num3 >  num1) 
        return "No a Triangle";
    if (num1 == num2 && num2 == num3)
        return "Equilateral Triangle";
    else if (num1 == num2 || num2 == num3 || num3 == num1)
        return "Isosceles Triangle";
    else
        return "Scalene Triangle";

}


console.log(typeOfTriangle(30,30,40));

/*
Medium
Given an array, your function should return the length of the array.
Example:
Input: arrayLength([1,5,3,7,8]) ––> Output: 5
*/

const arrayLength = (arr) =>  arr.length 
console.log(arrayLength( [1,2,3,4,5,6]));

/*Given an array and an item, your function should return the index at which the item is present.
Example:
Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2
 */

const indexOf = (arr,num) => {
   for(let i = 0;i < arr.length ; i++){
       if( arr[i] == num ) return i  
   }
   return "Not Found";
}

console.log(indexOf([1,2,3,6,5,6,4],11));

/*

Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
Example:
Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]

*/

const replace = (arr , num1 ,num2) => {

    for( let i=0;i < arr.length;i++  ){
        if( arr[i] == num1 ) arr[i] = num2
    }
    return arr;
}
console.log(replace( [1,5,3,5,6,8], 5, 10));

/*
Given two arrays, your function should return single merged array.
Example:
Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]
*/

const mergeArray = (arr1,arr2) => [...arr1,...arr2]

console.log(mergeArray([1,3,5], [2,4,6]));


/*
Given a string and an index, your function should return the character present at that index in the string.
Example:
Input: charAt("neoGcamp", 4) ––> Output: c*/
const charAt = (str,num) => {
    for( let i = 0;i < str.length;i++ ){
        if( i == num ) return str[i] 
    }
    return "Given number is Out Length";
}

console.log(charAt("neoGcamp", 4));

/*

Given two dates, your function should return which one comes before the other.
Example:
Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021
*/


const minDate = (dateOne,dateTwo) => {
    let dateOneArr = dateOne.split("/");
    let [fDay,fMonth,fYear] = dateOneArr;
    let dateTwoArr = dateTwo.split("/");
    let [sDay,sMonth,sYear] = dateTwoArr;
        
    if( fYear  > sYear){
        return dateOne;
    }else if( fMonth > sMonth ){
        return dateOne;
    }else if( fDay > sDay){
        return dateOne;
    }else{
        return dateTwo;
    }


}

console.log(minDate('02/05/2021', '24/01/2021'));

/*
Advanced
Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
Input: encodeString("neogcamp", 2) ––> Output: pgqiecor
Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.
*/

const encodeString = (str, num) => {
  console.log(num);
}

console.log("neogcamp", 2);

/*https://pythontutor.com/javascript.html#mode=display
Given a sentence, return a sentence with first letter of all words as capital.
Example:
Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers
*/


/*
Given an array of numbers, your function should return an array in the ascending order.
Example:
Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]
Remeber 
Bubble sort, merge sort, etc 
*/

const sortArray = (list) => {
    let done = false;   
    let temp;
    while(!done){
        done = true;
    for (let i =0; i < list.length; i++){
        if( list[i-1] > list[i] ){
            done = false;
             temp = list[i-1];
            list[i-1] = list[i];
            list[i] = temp;
        }
    }
 } 
    return list;
}

console.log(sortArray([100,83,32,9,45,61]));

/*
Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
Example:
Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen

*/

const reverseCharactersOfWord = (str) => {
    let strArr = str.split(" ");
    let returnStr = '';
    for(word of strArr){
        let r = " ";
        for(let i = word.length-1; i >= 0; i--){
            r = r + word[i];
          }
          returnStr = returnStr +  r;
    }
    return returnStr;
}

console.log(reverseCharactersOfWord("we are neoGrammers"));