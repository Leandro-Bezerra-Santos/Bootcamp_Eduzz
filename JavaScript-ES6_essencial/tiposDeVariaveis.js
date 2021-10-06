//escopo de global

var v1 = "Leandro";
let v2 = "Bezerra";
const v3 = "Santos";

console.log(`Var: ${v1},`);
console.log(`Let: ${v2},`);
console.log(`Const: ${v3};`);


{
    // Escopo de bloco
    let nome = "Escopo de bloco"
    console.log(nome);
}
/*console.log(nome); || Não podemos chamar a variavel aqui por que ela existe somente naquele bloco*/

function text(){
    // Escopo de Função
}