function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line

  // All Keys from source object gets stored in this array
  let keys = Object.keys(source);

  // Looks at all object in the collection array
  for(let i = 0; i < collection.length; i++){
    // flag: boolean that will set to true by default but 
    // if the collection obejct being inspected in this loop
    // does not have a match key value pair it will be false
    let flag = true;
    for(let j = 0; j < keys.length && flag; j++){
      if(!collection[i].hasOwnProperty(keys[j]) || collection[i][keys[j]] !== source[keys[j]]){
        flag = false;
      }
    }

    // If the flag was not set off this will push the current collection obejct 
    // into the arr array. 
    if(flag){
      arr.push(collection[i]);
    }
  }
  // Only change code above this line
  return arr;
}
