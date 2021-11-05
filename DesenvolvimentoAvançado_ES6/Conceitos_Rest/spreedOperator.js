// Ele se escreve exatamente como o rest operator

const log = ['Digital Innovation One','Jovem dev'];
const name = 'Leandro';
const spread = ["Rocket", "Alura", ...log].concat(...name);

console.log(spread);