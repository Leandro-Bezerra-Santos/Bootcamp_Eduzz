const user ={
    name:"Leandro",
    lastName: "Bezerra"
};

//Recupera as chaves de um objeto
console.log("Propriedades do objeto user:", Object.keys(user));

//Recupera os valores das chaves do objeto 
console.log("\nValores das propriedades do objeto user:", Object.values(user));

//Retorna um array de arrays contendo [nome.props, valor.props];
console.log("\nLista de priopriedades e valores: ", Object.entries(user));

// mergear propriedades de objetos 
Object.assign(user, {fullName: 'Leandro Bezerra Santos'});
console.log("\nAdicionar a propriedade fullName no objeto user", user);

console.log("\nAdicionando um novo objeto mergeando dois ou mais objetos", Object.assign({}, user, {age:26}));

//Previne todas as alterações em um objeto
const newObj = { foo: 'bar'};
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log("\nA variavel newObJ depois das alterações: ", newObj);

//Permite apenas a alteração em propriedades existentes em um objeto
const person = {name: 'Robson'};
Object.seal(person);

person.name   "Jhon locke";
delete person.name;
person.age = 26;

console.log("\nVariável person depois das alterações:", person);