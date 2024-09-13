document.addEventListener('DOMContentLoaded', () => {
    alert('Bem-vindo ao meu currículo! Explore minhas informações abaixo.');
    
    const contactButton = document.getElementById('contactButton');
    contactButton.addEventListener('click', () => {
        window.location.href = 'mailto:[seu-email@example.com]';
    });
});
