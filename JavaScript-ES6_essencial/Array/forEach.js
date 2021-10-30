const arr = ["manga", "abacate", "limão", "abobora", "uva"];
const fla = ["leandro", "larissa", ["leonardo", "roberto"]];

arr.forEach((value, index) => {
    console.log(`${index}: ${value}`);
});

console.log(arr.map((arr, index) => `${index}: ${arr}`));

console.log(fla.flat());//Retorna um array com o subarray concatenado
    