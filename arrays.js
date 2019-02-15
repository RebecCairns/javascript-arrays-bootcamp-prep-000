function addElementToBeginningOfArray(array101, newVal){
  var array202 = [newVal, ...array101]
  return array202;
}
function destructivelyAddElementToBeginningOfArray(array101, newVal){
   array101.unshift(newVal);
   return array101; 
}
function addElementToEndOfArray(array, element){
  array.push(element);
  return array;
}
function destructivelyAddElementToEndOfArray(array404, newVal4){
  array404.push(newVal4);
  return array404; 
}
function removeElementFromBeginningOfArra(array101){
  var newArray = array101.slice(1);
  return newArray;
}
function destructivelyRemoveElementFromEndOfArray(array101){
   var newArray2 =  array101.pop()
   return newArray2;
}
function removeElementFromEndOfArray(array101){
  var newArray3 = array101.slice(0, array101.length() - 1);
  return newArray3;
}