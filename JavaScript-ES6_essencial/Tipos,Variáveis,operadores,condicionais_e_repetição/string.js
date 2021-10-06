const txtSize = "Texto".length;
console.log(`Quantidades de Letras ${txtSize}`);

//Retorna um array quebrando a string por um delimitador
const splittedText = "Texto".split("x");
console.log('\nArray com as posições separadas pelo delimitador: ', splittedText);

//Busca um valor e substitui por outro 
const replaceText = "Texto".replace("Text", "txeT");
console.log("\nSubstituição de valor:", replaceText);

//Retorna a fatia de um valor 
const lastChar = "Texto".slice(-1);
console.log("\nUltima letra de um String:", lastChar);

const wallWithoutLastChar = 'Texto'.slice(1, -1);
console.log("\nValor da string da primeira letra menos a última:",wallWithoutLastChar);

const segundToEnd = 'Texto'.slice(1);
console.log("\nValor da string da segunda letra até a última:",segundToEnd);


// Retorna N caracter a partir de uma posição
const twoCharsBeforeFirstpos = "Texto".substr(0 ,2);
console.log("\nAs duas letras primeiras letras são", twoCharsBeforeFirstpos)