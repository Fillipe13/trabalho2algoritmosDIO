function classificarJogador(vitorias, derrotas) {
    // Calcula o saldo
    const saldo = vitorias - derrotas;

    // Classificação com base nas vitórias
    let classificacao;
    if (vitorias < 10) {
        classificacao = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        classificacao = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        classificacao = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        classificacao = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        classificacao = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        classificacao = "Lendário";
    } else {
        classificacao = "Imortal";
    }

    return {
        saldo: saldo,
        classificacao: classificacao
    };
}

// Exemplo de uso
const vitorias = 45;  // Altere conforme necessário
const derrotas = 10;  // Altere conforme necessário
const resultado = classificarJogador(vitorias, derrotas);

// Exibindo a mensagem desejada
console.log(`O Herói tem de saldo de **${resultado.saldo}** está no nível de **${resultado.classificacao}**.`);
