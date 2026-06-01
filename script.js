// Executa o código assim que a página termina de carregar
window.onload = function() {
    
    // (Nome só pra lembrar sites antigos)
    setTimeout(() => {
        let visitante = prompt("Bem-vindo ao nosso cantinho na internet! <3 \nQual o seu nome?");
        
        if (visitante) {
            alert("Que bom ter você aqui, " + visitante + "! Escolha um dos lados para explorar.");
        } else {
            alert("Visitante anônimo detectado... Escolha um dos lados se tiver coragem!");
        }
    }, 500); // Dá meio segundo antes de pular na tela
    
};



