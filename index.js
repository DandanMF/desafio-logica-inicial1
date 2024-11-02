const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nome;
let xp;

rl.question('Digite seu nome: ', (respostaNome) => {
    nome = respostaNome;

    rl.question('Digite sua quantidade de experiência: ', (xp) => {

        if (xp <= 1000) {
            console.log('Ferro!');
        } else if (xp >= 1001 && xp <= 2000) {
            console.log('Bronze!');
        } else if (xp >= 2001 && xp <= 5000) {
            console.log('Prata!');
        } else if (xp >= 5001 && xp <= 7000) {
            console.log('Ouro!');
        } else if (xp >= 7001 && xp <= 8000) {
            console.log('Platina!');
        } else if (xp >= 8001 && xp <= 9000) {
            console.log('Ascendente!');
        } else if (xp >= 9001 && xp <= 10000) {
            console.log('Imortal!');
        } else {
            console.log('Radiante!');
        }

        console.log('O Heroi de nome ' + '' + nome + '' + ' esta no nivel ' + '' + xp);
        rl.close();
    });
});
