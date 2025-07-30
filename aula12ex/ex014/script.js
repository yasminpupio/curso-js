function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12 ) {
        // BOM DIA
        img.src = 'fotomanha.png';
        document.body.style.background = 'rgba(216, 202, 170, 1)';
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE
        img.src = 'fototarde.png';
        document.body.style.background = 'rgba(138, 97, 66, 1)'
    } else {
        // BOA NOITE
        img.src = 'fotonoite.png';
        document.body.style.background = 'rgba(32, 91, 163, 1)'
    }
}

