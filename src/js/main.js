// Selecionando elementos
const toggle = document.querySelector('.header__toggle');
const nav = document.querySelector('.header__nav');

// Evento de clique
toggle.addEventListener('click', () => {

    // Alterna o estado do menu
    nav.classList.toggle('is-active');

    // Alterna o estado do botão (troca ícone)
    toggle.classList.toggle('is-active');
});