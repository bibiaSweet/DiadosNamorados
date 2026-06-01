// --- 1. CONTADOR DE RELACIONAMENTO ---
// Data de início do namoro: 21 de Junho de 2025
const dataInicio = new Date('2025-06-21T00:00:00');

function atualizarContador() {
    const agora = new Date();
    const diferenca = agora - dataInicio; // Diferença em milissegundos

    // Cálculos matemáticos de conversão
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor(diferenca / (1000 * 60 * 60));
    const minutos = Math.floor(diferenca / (1000 * 60));

    // Atualiza os números no HTML
    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas.toLocaleString('pt-BR');
    document.getElementById('minutos').textContent = minutos.toLocaleString('pt-BR');
}

// Atualiza o contador imediatamente e depois a cada 1 minuto (60000 ms)
atualizarContador();
setInterval(atualizarContador, 60000);

// --- 2. SISTEMA DE CARTAS ABERTAS ---
// Aqui você escreve o texto das suas cartas!
const cartasTextos = {
    'triste': {
        titulo: "Para quando você estiver triste 🌧️",
        texto: "[Escreva aqui o seu texto confortando ele... Ex: Meu amor, saiba que mesmo nos dias ruins eu estou aqui por você...]"
    },
    'saudade': {
        titulo: "Para quando sentir saudade ❤️",
        texto: "[Escreva aqui o seu texto... Ex: Eu também estou morrendo de saudades! Olhe nossas fotos e lembre que logo estaremos juntos.]"
    },
    'futuro': {
        titulo: "Para ler daqui a 5 anos 🕰️",
        texto: "[Escreva aqui... Ex: Se estamos lendo isso em 2031, eu espero que a gente já tenha realizado aquele nosso sonho...]"
    }
};

function abrirCarta(tipo) {
    const caixaCarta = document.getElementById('conteudo-carta');
    const titulo = document.getElementById('titulo-carta');
    const texto = document.getElementById('texto-carta');

    // Troca o conteúdo dependendo de qual botão foi clicado
    titulo.textContent = cartasTextos[tipo].titulo;
    texto.textContent = cartasTextos[tipo].texto;

    // Faz a carta aparecer na tela
    caixaCarta.classList.add('ativa');
}

function fecharCarta() {
    const caixaCarta = document.getElementById('conteudo-carta');
    caixaCarta.classList.remove('ativa');
}

// --- 3. QUIZ INTERATIVO ---
function responderQuiz(resposta) {
    // Aqui você pode personalizar a brincadeira. 
    // Como é uma página de brincadeira para quem estiver vendo, você pode colocar alertas engraçados.
    
    if(resposta === 'Bia') {
        alert("Haha! Você votou na Bia. Será que você acertou? 👀");
    } else if (resposta === 'Felipe') {
        alert("Você votou no Felipe! Ele vai ter que se defender dessa! 🦖");
    }
}