/*HOISTING é uma declaração de uma função ou de variáveis*/

/*hoisting de variáveis
    OBS: o hoist de variaveis faz ela apenas ser declarada
    porém sem nenhum valor atribuido a ela
*/
let hois;
    console.log(hois);
hois =  "leandro";
    console.log(hois);

console.log("--------------")

/*HOISTING de função*/ 
    function type(){
        log("Hoisting de Function");

        function log(value){
            console.log(value);
        }
    };

type();