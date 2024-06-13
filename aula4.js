const { html } = require("./base");

const regEx4 = /<.*>.*<\/.*>/;

console.log(html.match(/<.+>.+<\/.+>/g)); //greedy
console.log(html.match(/<.+?>.+?<\/.+?>/g)); //non-greedy
