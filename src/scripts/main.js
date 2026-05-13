// -- FUNÇÃO PRA BUSCAR O HEADER --
async function includeHeader() { // Essa tarefa pode demorar por vir de outro arquivo, então continue rodando o site enquanto espera

    // Fetch sai da página atual, vai até onde está o header.html e pega ele
    // Await é um comando de espera. Só passa pra próxima linha quando o fetch voltar com o arquivo
    const response = await fetch('/src/layouts-html/header.html');

    // Quando o fetch trás ele vem 'empacotado'. O .text() abre o pacote e transforma o conteúdo em html pra que o navegador consiga ler
    const html = await response.text();

    // No HTML tem um 'buraco' pro header. O getElementById encontra esse buraco específico. O innerHTML = html pega o código trazido pelo fetch e 'cola' ele lá dentro
    document.getElementById('header-placeholder').innerHTML = html;

    // Declara as variáveis. Isso vem depois do header
    const toggle = document.querySelector('.header__toggle');
    const nav = document.querySelector('.header__nav');

    /* 
    No código antigo o JS procurava o botão e já saia instalando o clique
    Se o arquivo header.html demorasse a carregar, o JS não encontraria o botão
    Consequentemente o navegador entraria em erro crítico 
    */

    // Checa se o botão e o menu estão na página/foram identificados, se sim, ele liga o clique, se não, ele não trava o site
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // O toggle funciona como um apagador
            nav.classList.toggle('is-active');
            toggle.classList.toggle('is-active');
        });
    }
}

// -- FUNÇÃO PRA BUSCAR O HEADER --
async function includeFooter() {
    // 1. O robô vai buscar o arquivo do rodapé
    const response = await fetch('/src/layouts-html/footer.html');
    const html = await response.text();

    // 2. Ele cola o conteúdo no buraco do footer
    document.getElementById('footer-placeholder').innerHTML = html;
}

// -- SISTEMA DE FILTRO E BUSCA DE RECEITAS --
function initRecipeFilter(){

    // Seleciona os elementos
    const filterBtns = document.querySelectorAll('.recipe-catalog__filter-btn');
    const recipeCards = document.querySelectorAll('.recipe-card');
    const searchInput = document.getElementById('search');

    // Categoria atual
    let currentFilter = 'all';

    // Texto atual da busca
    let currentSearch = '';

    // FUNÇÃO QUE FILTRA TUDO
    function updateRecipes(){

        recipeCards.forEach(card => {

            // Categoria do card
            const cardCategory = card.getAttribute('data-category');

            // Título do card
            const title = card
                .querySelector('.recipe-card__title')
                .innerText
                .toLowerCase();

            // Verifica categoria
            const matchCategory =
                currentFilter === 'all' ||
                currentFilter === cardCategory;

            // Verifica busca
            const matchSearch =
                title.includes(currentSearch);

            // Se passar nos dois filtros → mostra
            if(matchCategory && matchSearch){
                card.style.display = 'flex';
            } else{
                card.style.display = 'none';
            }
        });
    }

    // --- BOTÕES DE FILTRO ---
    filterBtns.forEach(btn => {

        btn.addEventListener('click', () => {

            // Remove ativo de todos
            filterBtns.forEach(b =>
                b.classList.remove('is-active')
            );

            // Ativa o clicado
            btn.classList.add('is-active');

            // Atualiza filtro atual
            currentFilter = btn.getAttribute('data-filter');

            // Atualiza cards
            updateRecipes();
        });
    });

    // --- CAMPO DE BUSCA ---
    if(searchInput){

        searchInput.addEventListener('input', (e) => {

            // Texto digitado
            currentSearch = e.target.value.toLowerCase();

            // Atualiza cards
            updateRecipes();
        });
    }
}

// Executa as funções de montagem do layout
includeHeader();
includeFooter();

// Executa a função de filtro
initRecipeFilter();