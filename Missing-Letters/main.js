/*
 *
 * Missing letters
 * Find the missing letter in the passed letter range and return it.
 * If all letters are present in the range, return undefined.
 *
 * Source: https://learn.freecodecamp.org
 *
 * */

function fearNotLetter(str) {
  // Initialize prev with the value 
  // of the first char in str as it ascii
  // representation.
  let prev = str[0].charCodeAt(0);

  // Scan the strings chars from the second char
  // to the last
  for(let i = 1; i < str.length; i++){
    let curr = str[i].charCodeAt(0);

    // If the current chars ascii value is 
    // more than one greater than the previous 
    // chars ascii value then return the missing 
    // character as a string.
    if((curr - prev) > 1){
      return String.fromCharCode(prev + 1);
    }
    prev = curr;
  }
  return undefined;
}
