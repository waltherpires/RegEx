const { alfabeto } = require("./base");

// conjunto [] -> [abc]
// ^ -> Negar
//[0-9] - Range
//[] - retorna caractere por caractere
//[]* - retorna Strings inteiras
// \u -> unicode
// \w caracteres alfanúmericos
console.log(alfabeto);
console.log(alfabeto.match(/[^abc123]+/g));

console.log(alfabeto.match(/[0-9]+/g));
console.log(alfabeto.match(/\d+/g)); //Faz o mesmo que a linha de cima
console.log(alfabeto.match(/\D+/g)); //Oposto da linha de cima
console.log(alfabeto.match(/[a-z]+/g));
console.log(alfabeto.match(/[A-Z]+/g));
console.log(alfabeto.match(/[a-zA-Z0-9]+/g));
console.log(alfabeto.match(/\w+/g)); //Faz o mesmo que a linha de cima
console.log(alfabeto.match(/\W+/g)); //Oposto do de cima

//console.log(alfabeto.match(/[\u00A0-\u00BA]+/g));
