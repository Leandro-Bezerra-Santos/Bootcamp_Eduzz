function som(a,b){
  var value = 0;

  for(var i=0; i< arguments.length; i++){
    value += arguments[i];
  }

  return value;
}

console.log(som(2,3,5,2))

//Com Rest operator
function rest(...args){
  return args.reduce((acc, value) => acc + value, 0);
}
console.log(rest(1,5,1,7))

function multiply(...rest){
  return rest.reduce((acc, value) => acc * value, 0);
}
console.log(multiply(5,5))