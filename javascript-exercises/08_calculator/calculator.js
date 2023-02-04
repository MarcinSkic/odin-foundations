const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(list) {
	return list.reduce((sum,element) => sum+=element ,0);
};

const multiply = function(list) {
  return list.reduce((sum,element) => sum*=element ,1);
};

const power = function(a,p) {
	return a**p;
};

const factorial = function(a) {
	return factorialHelper(0,1,a);
};

function factorialHelper (n,x,a){
  if(n === a){
    return x;
  }
  n++;
  x *= n;
  
  return factorialHelper(n,x,a);
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
