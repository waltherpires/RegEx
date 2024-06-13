const { texto, arquivos } = require("./base");

// Quantificadores

// * (opcionais) 0 ou n {0,}
// + (obrigatorio) 1 ou n {1,}
// ? (opcionais) 0 ou 1 {0,1}
// \ caractere de escape
// {min, max} minimo e maximo
// {10,} no minimo 10
// {10} exatamente 10

const regEx2 = /\.jpe?g/gi;
//const regEx2 = /\.jpe{0,1}g/gi;

for (const arquivo of arquivos) {
  console.log(arquivo, arquivo.match(regEx2));
}

//console.log(texto);
//
//const regEx1 = /Jo+ão/gi;
//
//console.log(texto.match(regEx1));
