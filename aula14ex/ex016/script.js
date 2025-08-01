function contar() {
    let txtini = document.getElementById('txtini');
    let txtfim = document.getElementById('txtfim');
    let txtpasso = document.getElementById('txtpasso');
    var res = document.getElementById('res');

    if (txtini.value.length == '') {
        alert('O campo INÍCIO está vazio, verifique!');
    } else if (txtfim.value.length == '') {
        alert('O campo FIM está vazio, verifique!');
    } else if (txtpasso.value.length == '') {
        alert('O campo PASSO está vazio, verifique!');
    } else {
        res.innerHTML = 'Contando:'
        let i = Number(txtini.value);
        let f = Number(txtfim.value);
        let p = Number(txtpasso.value);
        if (p == 0) {
            alert('Passo inválido! Considerando PASSO 1');
            p = 1;
        }

        if (i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449} `;
            }
        } else {
            // Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449} `;
            }
        }
        res.innerHTML += `\u{1F3C1}`;

    }
}