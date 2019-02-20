/*
 * Everything Be True 
 * Check if the predicate (second argument) is truthy on all elements of a collection (first argument). 
 * In other words, you are given an array collection of objects. 
 * The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false. 
 * In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
 *
 * Source: https://learn.freecodecamp.org
 *
 *
 * */


function truthCheck(collection, pre) {
  // Iterate through all objects in collection
  // if any of the objects are falsy then return false
  // if the end of loop is reached all values are assumed 
  // Truthy thus this functionre turns true.
  for(let i = 0; i < collection.length; i++){
    if(!collection[i][pre]){
      return false;
    }
  }
  return true;
}
