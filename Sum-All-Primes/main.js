/*
 * Sum All Primes 
 * Sum all the prime numbers up to and including the provided number. 
 * A prime number is defined as a number greater than one and having only two divisors, one and itself. 
 * For example, 2 is a prime number because it's only divisible by one and two. The provided number may not be a prime.
 *
 * Source: https://learn.freecodecamp.org
 * */

function sumPrimes(num) {
  // All prime numbers between 2 and the
  // var num.
  let primes = [];

  // Loop through all the values from 2 to the number
  // num itself.
  let i = 2;
  while(i <= num){
    // if the number i is a prime number
    // add to primes array
    if(isPrime(i)){
      primes.push(i);
    }
    i++;
  }

  // Summ all values in prime by using the array function
  // reduce.
  return primes.reduce(function(a, b) {return a+b;});
}

// if the passed value is prime return true
// otherwise return false
function isPrime(num){

  // if any of the values between 2 and the num
  // var can evenly go into num then return false
  for(let i = 2; i < num; i++){
    if(num % i === 0){
      return false;
    }
  }
  return true;
}

