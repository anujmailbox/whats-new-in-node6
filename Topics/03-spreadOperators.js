// Spread Operators
var a = [1,2,3,4,5];
var b = [6,7,8,9,10];

// current Situation
var c = a.concat(b);
console.log(c);

// ES6 Solution
var d = [...a, ...b];
console.log(d);