document.addEventListener('DOMContentLoaded', () => {
    let swiper;

    function initSwiper() {
        const pagination = document.querySelector('.swiper-pagination'); 

        // Проверяем, существует ли уже экземпляр Swiper и уничтожаем его, если он есть
        if (swiper) {
            swiper.destroy(true, true);
            if (pagination) pagination.style.display = 'none'; //убираем пагинацию
        }

        
        // Инициализируем Swiper только на экранах менее 768 пикселей
        if (window.innerWidth < 768) {
            swiper = new Swiper('.swiper', {
                slidesPerView: 'auto', 
                spaceBetween: 16,
                loop: true, 
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
            if (pagination) pagination.style.display = 'block'; //добавляем пагинацию
        }
    }

    // Проверка при загрузке страницы
    initSwiper();

    // Проверка при изменении размера окна
    window.addEventListener('resize', initSwiper);
    

    //Скрытие контента с логотипами
    const content = document.querySelector('.swiper');
    const button = document.querySelector('.brands__button--show');

    function toggleContent() {
        let foldedBlockHeight = '170px'; //Высота свернутого блока

        if (content.style.maxHeight && content.style.maxHeight !== foldedBlockHeight) {
            // Если max-height больше 160px, значит, контент развернут – сворачиваем его
            content.style.maxHeight = foldedBlockHeight;
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
});
