/*
 *
 * Sum All Odd Fibonacci Numbers
 * Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
 * The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. 
 * The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8. For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
 *
 * Source: https://learn.freecodecamp.org
 *
 * */

function sumFibs(num) {
  // Ths sum of all the odd
  // fib numbers
  let oddSum = 0;

  // if the number passed is equal to 1 we
  // summ 1 to the oddSum var but if num is
  // 2 then we sum 2 to oddSum
  if(num == 1){
    oddSum += 1;
  }else if (num > 1){
    oddSum += 2;
  }

  // first and second are the previous two
  // numbers in the fib sequence
  let first = 1;
  let second = 1;
  let fib = first + second;

  // while the current fib number in the
  // sequence is less than the number then
  // this loop will continue
  while(fib <= num){

    // if the fib number is odd then add it
    // to the oddSum var
    if(fib % 2 !== 0){
      oddSum += fib;
    }
    first = second;
    second = fib;
    fib = first + second;
  }

  return oddSum;
}


