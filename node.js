 const toggleBtn = document.getElementById('dark-mode');
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');


    // Trocar emoji e texto do botão
    if (document.body.classList.contains('dark-mode')) {
            toggleBtn.textContent = '☀️ Modo claro';
        } else {
            toggleBtn.textContent = '🌙 Modo escuro';
        };
 });