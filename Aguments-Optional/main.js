/*
 *
 *  Arguments Optional 
 *  Create a function that sums two arguments together. 
 *  If only one argument is provided, then return a function that expects one argument and returns the sum. 
 *
 *  For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function. 
 *  Calling this returned function with a single argument will then return the sum: var sumTwoAnd = addTogether(2); sumTwoAnd(3) returns 5. 
 *  If either argument isn't a valid number, return undefined.
 *
 *  Source: https://learn.freecodecamp.org
 *
 * */
function addTogether() {
  /*
  If there is only one argument provided and that argument 
  if a number then return a function that will add 
  the agument passed with another argument that will 
  later be passed through the returned function.
  */
  if(arguments.length === 1 && typeof arguments[0] === "number"){
    let y = arguments[0];
    return function(x){
      /**
       * if the type of variable that x is is not
       * a number then return undefined 
       * otherwise add the number with the previous value passed
       */
      if(typeof x !== "number"){
        return undefined;
      }
      return x + y;
    }

  /**
   * if two arguments are passed and they are both numbers then
   * return the sum of both.
   */
  }else if(arguments.length === 2 && typeof arguments[0] === "number" && typeof arguments[1] === "number"){
    return arguments[0] + arguments[1];
  }
  /**
   * if there are no valid numbers to add or more then 2 arguments were 
   * passed then return undefined.
   */
  return undefined;
}

