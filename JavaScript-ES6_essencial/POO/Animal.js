'use strict';

function Animal(){
    this.qtdePatas = 4;
}
const cachorro = new Animal;//Instânciando um Objeto 

console.log(cachorro instanceof Animal);//Cachorro instância Animal?
console.log(cachorro instanceof Function);//Cachorro instância uma função?

console.log(cachorro.qtdePatas);
console.log(cachorro.__proto__ === Animal.prototype);