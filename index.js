const anoAtual =  new Date().getFullYear();;
let anoNascimento = 2004;
const idade = anoAtual - anoNascimento;
const template =  `Sua idade é ${idade} anos`;
console.log(template);