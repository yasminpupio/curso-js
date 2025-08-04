let lista = [];
let res = document.getElementById('res');

function limparInput(campo) {
    campo.value = '';
    campo.focus();
}

function limparText(campo) {
    campo.innerText = '';
}

function criarP(texto, div) {
    let p = document.createElement('p');
    p.textContent = texto;
    div.appendChild(p);
}

function limparArray(array) {
    array.length = 0;
}

function adicionar() {
    let num = document.getElementById('txtnum');
    let tab = document.getElementById('tabval');
    let n = Number(num.value);

    if (n > 100) {
        alert('Este número não é permitido, verifique!')
        limparInput(num);
    } else if (n == 0) {
        alert('Não foi informado o número, verifique!');
        limparInput(num);
    } else if (lista.indexOf(n) != -1) {
        alert(`O número ${n} já foi inserido anteriormente, será ignorado!`);
        limparInput(num);
    } else {
        limparText(res);
        lista.push(n);

        let item = document.createElement('option');
        item.text = `Valor ${n} adicionado`;
        item.value = `$op${lista.length}`;
        tab.appendChild(item);
    }
}

function finalizar() {
    let soma = 0;
    for (let i = 0; i < lista.length; i++) {
        soma += lista[i];
    }

    let media = 0;
    media = soma / lista.length;

        criarP(`Ao todo, temos ${lista.length} números cadastrados.`, res);
        criarP(`O maior valor informado foi ${Math.max(...lista)}.`, res);
        criarP(`O menor valor informado foi ${Math.min(...lista)}.`, res);
        criarP(`Somando todos os valores, temos ${soma}.`, res);
        criarP(`A média dos valores digitados é ${media}.`, res);
}