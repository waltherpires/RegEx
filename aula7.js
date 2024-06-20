//Começa com e termina com

// ^ Começa com
// [^] Negação
// $ -> Termina com
// m - multiline

const { cpfs2 } = require("./base");

const cpf = "254.224.877-45";

const cpfRegExp = /^(\d{3}(\.|\-)){3}\d{2}$/gm;

console.log(cpfs2);
console.log(cpfs2.match(cpfRegExp));
