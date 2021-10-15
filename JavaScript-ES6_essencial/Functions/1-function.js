function fn(){
    return "Function mais antiga"
}
const arrowFn = () => 'Return implício ';

const arrowFn2 = () => {
    //Aqui pode ser colocado mais de uma expressão
    return "Return explícito"
}

//Funções também são objetos
fn.prop = "Posso criar propriedades";

console.log(fn());
console.log(fn.prop);

// Recebendo parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam);

console.log(logValue);
console.log(logFnResult);