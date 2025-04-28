document.querySelectorAll('.accordion-btn').forEach(button => {
    button.addEventListener('click', () => {
        const panel = button.nextElementSibling;
        const isOpen = panel.style.maxHeight;

        // Закрыть все открытые панели
        document.querySelectorAll('.panel').forEach(p => {
            if (p !== panel) {
                p.style.maxHeight = null;
                p.previousElementSibling.textContent = '▶ ' + p.previousElementSibling.textContent.slice(2);
            }
        });

        // Переключить текущую панель
        if (!isOpen || isOpen === '0px') {
            panel.style.maxHeight = panel.scrollHeight + 'px';
            button.textContent = '▼ ' + button.textContent.slice(2);
        } else {
            panel.style.maxHeight = null;
            button.textContent = '▶ ' + button.textContent.slice(2);
        }
    });
});