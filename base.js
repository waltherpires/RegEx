const texto = `
João trouxe    flores para sua amada namorada em 10 de janeiro de 1970,
Maria era o nome dela.


Foi um ano excelente na vida de joão. Teve 5 filhos, todos adultos atualmente.
maria, hoje sua esposa, ainda faz aquele café com pão de queijo nas tardes de
domingo. Também né! Sendo a boa mineira que é, nunca esquece seu famoso
pão de queijo.
Não canso de ouvir a Maria:
"Joooooooooãooooooo, o café tá prontinho aqui. Veeemm"!
`;

const arquivos = [
  "Atenção.jpg",
  "FOTO.jpeg",
  "Meu gatinho.jpg",
  "Meu gatinho.JPG",
  "Meu gatinho.JPEG",
  "Marido.png",
  "lista de compras.txt",
];

const ips = `

Os Ips são:
  0.0.0.0

  192.168.0.25
  
      10.10.5.12

  255.255.255.255
`;

const cpfs2 = `
254.224.877-45
215.978.456-12
047.258.369-96
963.987.32a.00
`;

const cpfs = `
Os CPFs são:
  254.224.877-45 215.978.456-12 047.258.369-96


  963.987.321.00
`;

const alfabeto =
  "ABCDEFGHIJKLMNOPQRSTUVXYWZ abcdefghijklmnopqrstuvxywz 123456789";

const html = "<p>Olá mundo</p> <p>Olá de novo</p>";
const html2 = `<p 
data-teste='teste'
class="teste teste">
Olá mundo
</p> <p>Olá mundo </p> <div>Sou a div</div>`;

module.exports = { texto, arquivos, html, html2, alfabeto, cpfs, cpfs2, ips };
