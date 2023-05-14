const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const ImagemBotaoTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {
        ImagemBotaoTema.setAttribute("src", "./src/imagens/sun.png");
    } else {
        ImagemBotaoTema.setAttribute("src", "./src/imagens/moon.png")
    }
});