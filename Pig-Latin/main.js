/*
 
 Pig Latin

 Challenge:Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

Souce: https://learn.freecodecamp.org


 * */

function translatePigLatin(str){
  // if string starts with vowel just add "way"
  // to the end of it
  if(isVowel(str[0])){
    str += "way";
  // If the string begins with at least
  // one consonant then do this
  }else if(clusterCheck(str)){
    let consanants = "";
    let firstVowelIndex = -1;
    for(let i = 0; i < str.length && firstVowelIndex < 0; i++){
      if(!isVowel(str[i])){
        consanants += str[i];
      }else{
        firstVowelIndex = i;
      }
    }

    // if there is at least one vowel following
    // the consonant(s) then concat the consonant(s)
    // to the end of the string after removing them
    // and att "ay" to the end of the string
    if(firstVowelIndex >= 0){
      str = str.slice(firstVowelIndex) + (consanants + "ay");
    // if the string is only consonants then
    // just add "ay" to the end of it
    }else{
      str += "ay";
    }
  }
  return str;
}

// char should be a single character string
function isVowel(char){
  if(!char.match(/[aeiou]/) || char.length > 1){
    return false;
  }
  return true;
}

// str is a string this function checks if
// that string starts with at least one consanant
function clusterCheck(str){
  if(!str.match(/^[aeiou]{1}/)){
    return true;
  }
  return false;
}


