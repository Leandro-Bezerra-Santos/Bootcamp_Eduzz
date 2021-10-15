//Spread ...
const parts = ["ombro", "joelho"];
const music = ["cabeça", ...parts, "e", "pés"];

console.log(music);

const args = [1, 2, 3];
function fn(x,y,z){}

console.log(fn(...args));