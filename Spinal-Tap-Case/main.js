/*

Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Source: https://learn.freecodecamp.org

*/

function spinalCase(str) {
  str = str.replace(/[\s"_"]/g, "-");
  str = str.replace(/(\B[A-Z])/g,"-$1" );
  str = str.toLowerCase();
  return str;
}
