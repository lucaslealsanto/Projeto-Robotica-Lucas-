document.addEventListener('DOMContentLoaded', function() {
    
    // Função para aumentar o tamanho de links ao passar o mouse
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            link.style.transform = "scale(1.1)";
        });
        link.addEventListener('mouseleave', function() {
            link.style.transform = "scale(1)";
        });
    });

    // Função para animação do formulário e envio
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Impede o envio padrão para testar a validação

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;

        // Validação simples
        if (!nome || !email) {
            alert("Por favor, preencha todos os campos.");
        } else {
            alert("Formulário enviado com
