const myNumber = 12.4032;

//Transforma um numero em uma string
const numberAsString = myNumber.toString();
console.log('\nNúmeo transformado em string:', numberAsString, typeof numberAsString);

//Retorna número com duas casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log("\nNúmero com duas casa decimais:", fixedTwoDecimals);

//Transforma string em float
console.log('\nString parseada para float',parseFloat('13.22'), typeof parseFloat('13.22'));

//transforma uma string em int 
console.log('\nString parseada para int:', parseInt('13.90'));