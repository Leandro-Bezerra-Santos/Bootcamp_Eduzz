'use strict';
class Animal{
    constructor(qtdepatas){
        this.qtdepatas = 4;
    }
}
class Cachorro extends Animal{
    constructor(morde){
        super(4);
        this.morder = 4;
    }
}

const pug = new Cachorro(false);
console.log(pug);