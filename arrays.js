var chocolateBars = [
                     'snickers', 
                     'hundred grand', 
                     'kitkat', 
                     'skittles']

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
function destructivelyRemoveElementFromEndOfArray(array){
  //destructivelyRemoveElementFromEndOfArray([1, 2, 3])).to.eql([1, 2])
   array.pop()
   return array;
}
function removeElementFromEndOfArray(array101){
  
  var newArray3 = array101.slice(0, array101.length - 1);
  return newArray3;
}
function  accessElementInArray(array, index){
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}