// 1. O header será usado como controle de estado
const header = document.querySelector('.header');

// 2. Pega o botão do menu (hamburger / X)
const button = document.querySelector('.header__toggle');

// 3. Cria o evento de clique 
button.addEventListener('click', () => {
    // 4. Toggle = liga/desliga classe
    // Se não existir header--open: -> adiciona (abre menu)
    // Se já existir: -> remove (fecha menu)
    header.classList.toggle('header--open');
});