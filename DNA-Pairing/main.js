/*
 *
 * Intermediate Algorithm Scripting: DNA Pairing
 * The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
 * Base pairs are a pair of AT and CG. Match the missing element to the provided character.
 * Return the provided character as the first element in each array.
 * For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
 * The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
 *
 * Source: https://learn.freecodecamp.org
 *
 * */

function pairElement(str) {
  // Contains all of the pairs in a 2-D array
  let pairs = [];

  // scans the entire string character by character
  for(let i = 0; i < str.length; i++){
    // Switch case matches each character with
    // its proper base pair puts into an array
    // and adds to the pairs array
    switch(str[i]){
      case "A":
        pairs.push([str[i],"T"]);
        break;
      case "T":
        pairs.push([str[i],"A"]);
        break;
      case "C":
        pairs.push([str[i], "G"]);
        break;
      case "G":
        pairs.push([str[i], "C"])
      default:
        break;
    }
  }
  // returns pairs as array of arrays of base pairs
  return pairs;
}

