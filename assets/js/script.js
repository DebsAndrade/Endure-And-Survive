function enviarForm(event) {
    event.preventDefault(); // Impede o refresh da página
    alert("Transmissão recebida com sucesso! Câmbio, desligo. 🍄");
    event.target.reset(); // Limpa o formulário
}
