/*OBS: nós nunca alteramos um objeto uma variavel ou qualquer tipo de coisa
diretamente nele mas em uma representação*/

const user = {
    name: "Leandro",
    lastName: "Bezerra"
};

function getfullName(user){
    return{
        ...user,
        fullName: `${user.name} ${user.lastName}`
    }
}

const nameL = getfullName(user);

console.log(nameL)