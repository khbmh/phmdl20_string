/*

If a given string has either x, replace x by y. if the given string has X, replace it by Y.

hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.


*/

let str = `The XxXxXxXx-factor in the performance was the unexpected, dazzling finale.`;

let findXndReplaceX = str.includes(`x` || `X`)
  ? str.replace(/x/g, `y`).replace(/X/g, `Y`)
  : str;
console.log(findXndReplaceX);
