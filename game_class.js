const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        if (this.tipo === "mago") {
            ataque = "usando magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "usando espada";
        } else if (this.tipo === "monge") {
            ataque = "usando artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "usando shuriken";
        } else {
            ataque = "fez um ataque desconhecido";
        }
        console.log(`O ${this.tipo} atacou ${ataque}`);
    }
}

rl.question('Digite seu nome: ', (nome) => {
    rl.question('Digite sua idade: ', (idade) => {
        rl.question('Digite o tipo do heroi: ', (tipo) => {
            let heroi = new Heroi(nome, idade, tipo);
            heroi.atacar();
            rl.close();
        });
    });
});
