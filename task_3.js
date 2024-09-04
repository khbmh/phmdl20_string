/*

Check whether a string contains all the vowels a, e, i, o, u

*/

// let str = `An apple is green. A watermelon is also green.`;
let str = `A quick brown fox jumps over the lazy dog.`;

let vowelCheck = str.toLowerCase().includes(`a` && `e` && `i` && `o` && `u`);
vowelCheck ? console.log(`Has all the vowels`) : console.log(`no`);

/*let str = `A quick brown fox jumps over the lazy dog.`;

function containsAllVowels(s) {
  let vowels = 'aeiou';
  s = s.toLowerCase();  // Convert the string to lowercase for case-insensitive comparison

  // Check if each vowel is present in the string
  for (let vowel of vowels) {
    if (!s.includes(vowel)) {
      return false;  // Return false if any vowel is missing
    }
  }
  return true;  // Return true if all vowels are present
}

let vowelCheck = containsAllVowels(str);
vowelCheck ? console.log(`Has all the vowels`) : console.log(`No`);
*/
