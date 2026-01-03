/* --- ENVIO DO FORMULÁRIO (Simulação) --- */
function enviarForm(event) {
    event.preventDefault();
    alert("Transmissão recebida com sucesso! Câmbio, desligo. 🍄");
    event.target.reset();
}

/* --- MENU HAMBÚRGUER --- */
const burgerMenu = document.getElementById('burger-menu');
const menuNav = document.getElementById('menu');
const menuLinks = document.querySelectorAll('#menu a'); // Seleciona todos os links do menu

// Função para alternar o menu (abrir/fechar)
function toggleMenu() {
    burgerMenu.classList.toggle("close");
    menuNav.classList.toggle("overlay");
}

// Evento de clique no ícone do hambúrguer
burgerMenu.addEventListener('click', toggleMenu);

// Evento: Fechar o menu ao clicar num link (Melhor UX)
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Se o menu estiver aberto, fecha-o
        if (menuNav.classList.contains('overlay')) {
            toggleMenu();
        }
    });
});
