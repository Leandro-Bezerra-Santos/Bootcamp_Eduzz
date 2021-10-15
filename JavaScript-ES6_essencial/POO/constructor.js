function Pessoa(name, idade){//Pessoa é a construtora
    this.name = name;
    this.idade = idade;
}
const pessoas = new Pessoa("leandro", 16);//Instãnciando o objeto
console.log(pessoas);