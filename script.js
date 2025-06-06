function mostrarSecao(id) {
    const secoes = document.querySelectorAll('.secao');
    secoes.forEach(secao => {
        secao.classList.remove('ativa');
    });
    document.getElementById(id).classList.add('ativa');
}

function aumentarFonte() {
    document.body.style.fontSize = 'larger';
}

function diminuirFonte() {
    document.body.style.fontSize = 'smaller';
}
