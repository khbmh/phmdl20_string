/*

Count how many times a string has the letter a or A

*/

let str =`An apple is green. A watermelon is also green.`

let count = str.toLowerCase().match(/a/g).length

console.log(count)