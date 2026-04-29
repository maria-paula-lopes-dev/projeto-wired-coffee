// Criando interatividade pro menu hamburger 
const button = document.querySelector('.header__toggle');

// Criando função pra ação do menu
function toggleMenu(){
    // Seleciono a navegação
    const nav = document.querySelector('.header-nav');

    // Na navegação eu crio uma classe de active (ativo)
    nav.classList.toggle('active'); // Adicione caso não tenha e remova caso tenha 
}

// Adicionando uma função pro botão
button.addEventListener('click', toggleMenu);