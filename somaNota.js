let nota;
let soma = 0;
const input = require('readline-sync');

for(let i = 1; i<=3; i++){
     nota = Number(input.question(`Informe a nota ${i}: `));
     soma += nota / 3;
}
console.log(`Sua media final foi ${soma.toFixed(1)}`);