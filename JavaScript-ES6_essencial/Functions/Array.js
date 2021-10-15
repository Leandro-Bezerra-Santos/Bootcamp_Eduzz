const users = ["RAFAEL", "EMILY", "LARISSA"];

const gender = {
    MAN: Symbol("M"),
    WOMAN: Symbol("F")
};

const persons = [
    {
        name:"leandro",
        age: 16,
        gender: gender.WOMAN
    },
    {
        name:"Luan",
        age: 20,
        gender: gender.MAN
    },
    {
        name:"Luana",
        age: 17,
        gender: gender.WOMAN
    }
]

//Retorna quantos items tem no array
console.log(`Items ${persons.length}`);

//Verifica se é array
console.log(`A variável persons é array? ${Array.isArray(persons)}`);

persons.forEach(person =>{
    console.log(`Nome: ${person.name}`);
});


//filtrar o array 
const mens = persons.filter(person => person.gender === gender.MAN);
console.log(`\nNova lista apenas com homens:`, mens);

//Retorna um novo
const personsWithCourse = persons.map(person =>{
    person.curse = "ES6 JavaScript"
    return person;
});

console.log("\nPessoas com a adição do course:", personsWithCourse);

//Transformar um Array em outro tipo
const totalAge = persons.reduce((age,person) =>{
    age+= person.age;
    return age;
}, 0);

console.log('\nSoma da idade das pessoas', totalAge);

//Juntando operadores
const totalEvenAges = persons
            .filter(person => person.age % 2 === 0)
            .reduce((age,person) =>{
                age+= person.age;
                return age;
            }, 0);
console.log("\nSoma de idades das pessoas que possuem idade par", totalEvenAges);