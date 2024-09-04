/*

Capitalize Every first Letter of each word in a String

*/

/*


** separate the words"
** have to get all the first Letter of each word
** then make their 0 index upperCase
** join the words"


let str = `A quick brown fox jumps over the lazy dog.`;

let separateWords = str.split(` `);

for (const word of separateWords) {
  let separateLetters = word.split(``);
  for (let i = 0; i > word.length; i++) {
    if (i === 0) {
      word[i] = word[i].toUpperCase();
    } else {
      word[i] = word[i];
    }
    separateLetters += word[i]
    let joinLetters = word.join(``);
    console.log(joinLetters)
  }
}

console.log(separateWords)


*/

let str = `A quick brown fox jumps over the lazy dog.`;

// Separate the words
let separateWords = str.split(" ");

// Process each word
for (let i = 0; i < separateWords.length; i++) {
  let word = separateWords[i];

  // Capitalize the first letter if the word is not empty
  if (word.length > 0) {
    let separateLetters = word.split("");
    separateLetters[0] = separateLetters[0].toUpperCase();
    // Reconstruct the word
    separateWords[i] = separateLetters.join("");
  }
}

// Join the words back into a single string
let capitalizedStr = separateWords.join(" ");

console.log(capitalizedStr);
