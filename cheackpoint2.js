// reverse a string//
function reverseString(str){
    return str.split('').reverse().joint('');
}
//  count characters 
function countCharacters(str){
    return str.length;
}
// capitalize words 
function capitalizeWords(sentence){
    return sentence.replace(/\b\w/g,char => char.toUpperCase());
}
// find max et min 
function findMax(arr){
    return Math.max(...arr);
}  
function findMin(arr){
    return Math.min(...arr);
}  
// sun of array 
function sumArray(arr){
    return arr.reduce((acc,curr) =>acc + curr,0);
}
// filter array 
function filterArray(arr,condition){
    return arr.filter(condition);
}
// factorial 
function factorial(n){
    if (n ==0){
        return 1;}
        else {
            return n*factorial(n -1);
        }
}
// prime Number check 
function isPrime(num){
    if (num <=1) return false;
    for (let i =2; i<= Math.sprt(num);i++){
        if (num % i === 0) return false;
    }
    return true;
}