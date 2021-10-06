const user ={
    name:"Leandro",
    idade: 16
};

//Alterando a propriedade do obj
user.idade = 15;
user['idade'] = 10;

console.log(user.idade);

//Criando propriedades
user.lastName = 'Bezerra';
console.log(user);

//Deletando propriedades 
delete user.idade;
console.log(user)