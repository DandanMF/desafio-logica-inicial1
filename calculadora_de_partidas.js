const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let qtdevitorias;
let qtdederrotas;
let nivel;

rl.question('Digite a quantidade de vitorias: ', (qtdevitorias) => {

    rl.question('Digite a quantidade de derrotas: ', (qtdederrotas) => {

        ranked(qtdevitorias, qtdederrotas);

        console.log('O Heroi tem saldo de ' + '' + qtdevitorias + ' vitorias' + ' e esta no nivel de ' + '' + nivel);
        rl.close();
    });
});

function ranked(qtdevitorias, qtdederrotas){

    if (qtdevitorias <= 10) {
        console.log('Ferro!');
        nivel = 'Ferro';
    } else if (qtdevitorias >= 11 && qtdevitorias <= 20) {
        console.log('Bronze!');
        nivel = 'Bronze';
    } else if (qtdevitorias >= 21 && qtdevitorias <= 50) {
        console.log('Prata!');
        nivel = 'Prata';
    } else if (qtdevitorias >= 51 && qtdevitorias <= 80) {
        console.log('Ouro!');
        nivel = 'Ouro';
    } else if (qtdevitorias >= 81 && qtdevitorias <= 90) {
        console.log('Diamante!');
        nivel = 'Diamante';
    } else if (qtdevitorias >= 91 && qtdevitorias <= 100) {
        console.log('Lendario!');
        nivel = 'Lendario';
    } else {
        console.log('Imortal!');
        nivel = 'Imortal';
    }
    return nivel;
}