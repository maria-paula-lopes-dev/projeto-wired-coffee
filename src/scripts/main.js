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

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // O toggle funciona como um apagador
            nav.classList.toggle('is-active');
            toggle.classList.toggle('is-active');
        });
    }
}

async function includeFooter() {
    // 1. O robô vai buscar o arquivo do rodapé
    const response = await fetch('/src/layouts-html/footer.html');
    const html = await response.text();

    // 2. Ele cola o conteúdo no buraco do footer
    document.getElementById('footer-placeholder').innerHTML = html;
}

// Executa as duas funções para montar a página
includeHeader();
includeFooter();