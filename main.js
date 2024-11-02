const content = document.querySelector('.brands__inner');
const button = document.querySelector('.brands__show-all');

function toggleContent() {
    if (content.style.maxHeight && content.style.maxHeight !== '160px') {
        // Если max-height больше 160px, значит, контент развернут – сворачиваем его
        content.style.maxHeight = '160px';
        button.textContent = 'Показать все';
        button.classList.remove('rotated');
    } else {
        // Если контент свернут, устанавливаем max-height равной полной высоте содержимого
        content.style.maxHeight = `${content.scrollHeight}px`;
        button.textContent = 'Скрыть';
        button.classList.add('rotated');
    }
}

button.addEventListener('click', toggleContent);

