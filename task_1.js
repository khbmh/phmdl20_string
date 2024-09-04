/*

Count how many times a string has the letter a

*/

let str =`An apple is green. A watermelon is also green.`
let matches = str.match(/a/g);
let count = matches ? matches.length : 0;

console.log(count);

