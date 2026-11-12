// Passo 1 - listar páginas
const pages = [
    "./Assets/pagina_01.jpg",
    "./Assets/pagina_02.jpg",
    "./Assets/pagina_03.jpg",
    "./Assets/pagina_04.jpg",
    "./Assets/pagina_05.jpg",
    "./Assets/pagina_06.jpg",
    "./Assets/pagina_07.jpg",
    "./Assets/pagina_08.jpg",
    "./Assets/pagina_09.jpg",
];

// Passo 2 - Contagem da Lista

let currentPageIndex = 0;

// Selecionar os elementos do HTML
const imgElement = document.getElementById("manga-page");
const btnPrev = document.getElementById("prev-btn");
const btnNext = document.getElementById("next-btn");
const pageCounter = document.getElementById("page-counter");

// Atualizar a página do leitor
function updateReader() {
    imgElement.src = pages[currentPageIndex];

    pageCounter.textContent =
        `Página ${currentPageIndex + 1} de ${pages.length}`;

    btnPrev.disabled = currentPageIndex === 0;
    btnNext.disabled = currentPageIndex === pages.length - 1;
}

// Botão Anterior
btnPrev.addEventListener("click", () => {
    if (currentPageIndex > 0) {
        currentPageIndex--;
        updateReader();
    }
});

// Botão Próximo
btnNext.addEventListener("click", () => {
    if (currentPageIndex < pages.length - 1) {
        currentPageIndex++;
        updateReader();
    }
});

// Verificar se a imagem foi carregada
imgElement.addEventListener("error", () => {
    console.error("Não foi possível carregar a imagem:", imgElement.src);
});

// Iniciar o leitor
updateReader();


// Passo 6 - Suport para navegação via seta
document.addEventListener ("keydown", (event) => {
    if (event.key === "ArrowLeft" && currentPageIndex > 0) {
        currentPageIndex--;
        updateReader();
    } else if (event.key === "ArrowRight" && currentPageIndex < pages.length - 1) {
        currentPageIndex++;
        updateReader();
    }
})

updateReader();

