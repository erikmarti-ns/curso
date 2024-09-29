let nome = 'Luiz Otávio'; //let = variavel
let sobrenome = 'Miranda';
let idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let imc;
let anoNacimento;

imc = peso / (alturaEmM * alturaEmM);

anoNacimento = 2024 - idade;

// + pode unir
console.log(`${nome} ${sobrenome}, tem ${idade} anos pesa, ${peso} Kg`);
console.log(`tem altura de ${alturaEmM} em ${imc} é de imc`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNacimento}.`)

