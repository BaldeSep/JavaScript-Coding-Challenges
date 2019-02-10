/*
 *
 *	Search and Replace
 *
 * 	Perform a search and replace on the sentence using the arguments provided and return the new sentence.
 * 	First argument is the sentence to perform the search and replace on.
 * 	Second argument is the word that you will be replacing (before).
 * 	Third argument is what you will be replacing the second argument with (after).
 *
 *	Source: https://learn.freecodecamp.org
 *
 *
 * */

function myReplace(str, before, after) {
  let index = str.indexOf(before);
  if(index > -1 && before[0].match(/[A-Z]/)){
    str = str.slice(0, index) + toCapatalize(after) + str.slice(index + before.length);
  }else if(index > -1 && before[0].match(/[a-z]/)){
    str = str.slice(0, index) + after.toLowerCase() + str.slice(index + before.length);
  }
  return str;
}

function toCapatalize(str){
  return str[0].toUpperCase() + str.slice(1);
}

