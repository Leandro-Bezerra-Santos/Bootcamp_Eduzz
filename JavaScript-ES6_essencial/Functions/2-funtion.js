this.name = "Nome no contexto de criação";

const getNameArrow = () => this.name;

function getName (){
    return this.name;
}

const user ={
    name: "Nome no objeto de execução",
    getNameArrow,
    getName
};

console.log(user.getNameArrow());
console.log(user.getName());