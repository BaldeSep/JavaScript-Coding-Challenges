/* 
 * Binary Agents 
 * Return an English translated sentence of the passed binary string. 
 * The binary string will be space separated.
 *
 * Source: https://learn.freecodecamp.org
 *
 * */

function binaryAgent(str) {
  // Makes an array of binary numbers
  // splitting them up based on the spaces in
  // the string
  str = str.split(" ");

  // will contain the final string to return
  let finalStr = "";

  // Iterate through each binary word
  for(let i = 0; i < str.length; i++){

    // The ascii digit
    let charCode = 0;

    // The position used to
    // do the math in translating
    // between binary and decimal
    let pos = 0;

    // For each binary digit we convert it to a digit and
    // add it to the charCode.
    for(let j = str[i].length - 1; j >= 0; j--, pos++){
      charCode += ( parseInt(str[i][j], 10) * Math.pow(2, pos) );
    }

    // Translate from the charCode to string using
    // the ascii standard.
    finalStr += String.fromCharCode(charCode);
  }
  return finalStr;
}

