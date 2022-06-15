// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

campoSaldo ? campoSaldo.innerHTML = String(0) : 0; 

function somarAoSaldo(soma: number) {
    campoSaldo ? campoSaldo.innerHTML = String(soma + Number(campoSaldo.innerHTML)) : 0;
}

function limparSaldo() {
    campoSaldo ? campoSaldo.innerHTML = '' : '';
}

botaoAtualizar?.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar?.addEventListener('click', function () {
    limparSaldo();
});
