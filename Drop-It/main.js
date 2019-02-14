/*
 *
 * Drop it 
 * Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it. 
 *
 * Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
 *
 * Source: https://learn.freecodecamp.org
 * */

function dropElements(arr, func) {
  // removes the first element
  // in arr until the function func
  // returns the value true when
  // the first value in arr is passed
  // as an argument.
  while(true){
    if(!func(arr[0])){
      arr.splice(0, 1);
    }else{
      break;
    }
  }
  return arr;
}

