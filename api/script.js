function Cripto() {
    //Declaração das variaveis
    var areaResposta;
    var mensagem;

    // Obter o conteúdo do input pelo ID e Obter acesso a area de resposta
    areaResposta = document.getElementById("areaResposta");
    mensagem = document.getElementById("inptMsg").value;




    // Chama a função que verifica se a string contém números ou acentuação
    if (verificarAcentosENumeros(mensagem)) {

        //Está sendo utilizado o replacesado para substituir parte de uma string por outra parte
        //Nesse caso, estamos substituindo as vogais por outras palavras
        // O /g indica que você deseja substituir todas as vezes que aparecer a vogal desejada e não apenas na primeira aparição

        mensagem = mensagem.replace(/e/g, "enter");
        mensagem = mensagem.replace(/i/g, "imes");
        mensagem = mensagem.replace(/a/g, "ai");
        mensagem = mensagem.replace(/o/g, "ober");
        mensagem = mensagem.replace(/u/g, "ufat");

        areaResposta.textContent = mensagem;
    }
}

function Descripto() {
    //Declaração das variaveis
    var areaResposta;
    var mensagem;

    // Obter o conteúdo do input pelo ID e Obter acesso a area de resposta
    areaResposta = document.getElementById("areaResposta");
    mensagem = document.getElementById("inptMsg").value;




    // Chama a função que verifica se a string contém números ou acentuação
    if (verificarAcentosENumeros(mensagem)) {

        //Está sendo utilizado o replacesado para substituir parte de uma string por outra parte
        //Nesse caso, estamos substituindo as vogais por outras palavras
        // O /g indica que você deseja substituir todas as vezes que aparecer a vogal desejada e não apenas na primeira aparição

        mensagem = mensagem.replace(/enter/g, "e");
        mensagem = mensagem.replace(/imes/g, "i");
        mensagem = mensagem.replace(/ai/g, "a");
        mensagem = mensagem.replace(/ober/g, "o");
        mensagem = mensagem.replace(/ufat/g, "u");

        areaResposta.textContent = mensagem;
    }
}



function verificarAcentosENumeros(str) {
    // Verifica se a string contém números
    let temNumeros = /[0-9]/.test(str);

    // Verifica se a string contém acentos
    let temAcentos = /[áàâãéèêíïóôõöúçñ]/i.test(str);

    let temMaiusculo = /[A-Z]/.test(str);


    if (temMaiusculo) {
        alert("A palavra não pode conter letra maiscula.");
        return false;
    } else if (temNumeros) {
        alert("A palavra não pode conter números.");
        return false;
    } else if (temAcentos) {
        alert("A palavra não pode conter acentuação.");
        return false;
    }
    return true;
}

function copiarTexto() {

    var texto = document.getElementById("areaResposta").innerText;

    /*
    * Essa parte do código faz com que o navegador copie o texto para a área de transferência do seu computador.
    * Aqui esta sendo utilizado "navigator.clipboard.writeText(texto)", no qual essa é a função de copiar o texto
    * que está na região que areaReposta para a area de transferencia
    * 
    *  
    */
    navigator.clipboard.writeText(texto)
        .then(function () {
            alert("Texto copiado para a área de transferência!");
        })
        .catch(function () {
            alert("Não foi possível copiar o texto.");
        });
}
