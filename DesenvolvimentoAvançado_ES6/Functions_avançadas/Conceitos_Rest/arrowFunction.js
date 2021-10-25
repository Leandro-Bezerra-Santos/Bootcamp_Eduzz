function log(value){
    console.log(value);
}
log("Function Comum !");

const anonima = (function(param){
    console.log(param);
});
anonima("Função anonima");

const sum = (a, b) => a + b;
console.log(sum(2,2));

const sub = (c, d) => {
    return c - d;
}
console.log(sub(10,2));

const obj  = {
    showContext: show => {
        console.log("Métodos dentro de objetos", show);
    },
    closeContext: close => {
        console.log('Método', close)
    }
}
console.log(obj.showContext("Show"));
console.log(obj.closeContext("Close"));