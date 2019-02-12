/*
 * Sorted Union
 * Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
 * In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
 * The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
 *
 * Source: https://learn.freecodecamp.org
 *
 * */

function uniteUnique(arr) {
  // All unique values, no duplicates go 
  // into this array
  let union = [];

  // Checks every argument and all the values 
  // in each argument. If the value is not
  // currently in the union array this for loop will 
  // add that value into the union array.
  for(let arg = 0; arg < arguments.length; arg++){
    for(let i = 0; i < arguments[arg].length; i++){
      if(!isIn(union, arguments[arg][i])){
        union.push(arguments[arg][i]);
      }
    }
  }
  return union;
}

// Used in the uniteUnique function 
// in order to determine if the value val 
// is located in the array arr. 
// If val is found at all in the array this 
// function returns true.
function isIn(arr, val){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === val){
      return true;
    }
  }
  return false;
}

