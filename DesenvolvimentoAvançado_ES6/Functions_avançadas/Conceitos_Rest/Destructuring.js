//Destructuring antes do es6
const arr = ['Apple', 'ReactJs', 'Orange'];

const app = arr[0];
const react = arr[1];
const color = arr[2];

//ATUALIZADO ES6
const [Destructuring, Assign] = ['Desestruturando', 'A variável'];

console.log(Destructuring  + ' || ' + Assign);


//ANTES DO ES6 OBJETOS
const person = {
  name:'leandro',
  idade: 16,
  props:{
    gender: 'masc',
  }
}

const nome = person.name;
const ida = person.idade;

//COM ES6
const { name, idade, props:{gender}} = person;

console.log(name, idade, gender);
