/*Currying é uma função que recebe um paramêtro*/

/*OBS: quando usamos umafunção sem currying temos que ficar
repetindo o mesmo numero e com currying não*/


//Função sem Currying
function somaDois(a, b){
    return a + b; 
}
console.log(somaDois(2,5));
console.log(somaDois(2,4));
console.log(somaDois(2,10));

//Função com currying
console.log("---------")
function soma(a){
    return function(b){
        return a + b;
    }
}
const paramsA = soma(2);
 
console.log(paramsA(5));
console.log(paramsA(2));
console.log(paramsA(6));