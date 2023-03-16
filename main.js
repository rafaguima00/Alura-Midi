const listaDeTeclas = document.querySelectorAll('.tecla');

for (var i = 0; i < listaDeTeclas.length; i++) {

    //Lista de teclas (botões) na nossa imagem
    const tecla = listaDeTeclas[i];

    //A segunda classe da lista de classes de cada botão
    const instrumento = tecla.classList[1];

    //Concatenar o id do som de cada botão com o nome das classes correspondentes
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
}

function tocaSom(idElementAudio) {
    document.querySelector(idElementAudio).play();
}
