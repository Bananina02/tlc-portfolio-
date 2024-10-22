document.addEventListener("DOMContentLoaded", function() {
    let btnMore = document.querySelector(".press__button");
    let cards = document.querySelectorAll('.swiper-slide');

    btnMore.addEventListener("click", function() {
        cards.forEach(card => {
            if (card.classList.contains('display-none')) {
                card.classList.remove('display-none');
                btnMore.classList.add('display-none')
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    let btnMore = document.querySelector(".press__button");
    let cards = document.querySelectorAll('.document__block');
          

    btnMore.addEventListener("click", function() {
        cards.forEach(card => {
            if (card.classList.contains('display-none')) {
                card.classList.remove('display-none');
                btnMore.classList.add('display-none')
            }
        });
    });
});
const linksDoc = document.querySelectorAll('.document__link-dowhs a');
const linksDocTab = document.querySelectorAll('.tab-doc a');
const linksContact = document.querySelectorAll('.contact-tab a');

linksDoc.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();      
        linksDoc.forEach(l => l.classList.remove('actives'));
        this.classList.add('actives');
        
        const targetId = this.getAttribute('data-target');

 
        document.querySelectorAll('.content-block').forEach(block => {
            block.style.display = 'none';
        });

    
        document.getElementById(targetId).style.display = 'block';

        const innerTabs = document.querySelectorAll(`#${targetId} .tab-doc a`);
        innerTabs.forEach(l => l.classList.remove('actives'));
        const innerTarget = innerTabs[0].getAttribute('data');
        document.querySelectorAll(`#${targetId} .content-section`).forEach(block => {
            block.style.display = 'none';
        });
        document.getElementById(innerTarget).style.display = 'block';
    });
});
document.querySelectorAll('.document__block').forEach(function(documentBlock) {
    documentBlock.addEventListener('click', function(event) {
        event.preventDefault();

        // Селектор для блока вакансии, родителя
        const currentVacancyBlock = this.nextElementSibling;

        // Проверяем, есть ли у блока класс active
        const isActive = currentVacancyBlock.classList.contains('active');

        // Убираем класс active у всех блоков вакансий
        document.querySelectorAll('.vacancy__block').forEach(function(block) {
            block.classList.remove('active');
        });

        // Если блок неактивен, добавляем класс active
        if (!isActive) {
            currentVacancyBlock.classList.add('active');
        }
    });
});
linksDocTab.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();      
        linksDocTab.forEach(l => l.classList.remove('actives'));
        this.classList.add('actives');

        const target = this.getAttribute('data');

        const parentContentBlock = this.closest('.content-block'); 
        parentContentBlock.querySelectorAll('.content-section').forEach(block => {
            block.style.display = 'none';
        });
        document.getElementById(target).style.display = 'block';
    });
});
document.querySelectorAll('.contact-item a').forEach(tab => {
    tab.addEventListener('click', function(e) {
        e.preventDefault();

        // Удалить активный класс у всех табов
        document.querySelectorAll('.contact-item a').forEach(item => {
            item.classList.remove('active');
        });

        // Скрыть все блоки с контактами
        document.querySelectorAll('.contact__blocks').forEach(block => {
            block.style.display = 'none';
        });

        // Добавить активный класс к текущему табу
        this.classList.add('active');

        // Отобразить соответствующий блок с контактами
        const targetId = this.getAttribute('data');
        if (targetId) {
            document.getElementById(targetId).style.display = 'flex';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.car-contact a');
    const blocks = document.querySelectorAll('.vacancy__blocks');

    tabs.forEach(tab => {
        tab.addEventListener('click', function(event) {
            event.preventDefault();

            // Удаляем класс active у всех табов и блоков
            tabs.forEach(t => t.classList.remove('active'));
            blocks.forEach(block => block.style.display = 'none');

            // Добавляем класс active к текущему табу
            this.classList.add('active');

            // Получаем значение data и показываем соответствующий блок
            const data = this.getAttribute('data');
            const activeBlock = document.getElementById(data);
            activeBlock.style.display = 'block';
        });
    });
});
if($("[news-slider-about]").length > 0){
    $("[news-slider-about]").each((function () {
        let e = $(this).closest(".section-media").find('.arrow-container-inside .arrow-item.left')[0],
            t = $(this).closest(".section-media").find('.arrow-container-inside .arrow-item.right')[0];
        var swiper = new Swiper($(this).find(".swiper")[0], {
            speed: 800,
            parallax: true,
            spaceBetween: 20,
            centeredSlides: false,
            slidesPerView: 4, // можно оставить или изменить в зависимости от ваших нужд
            navigation: {
                nextEl: t,
                prevEl: e
            },
            breakpoints: {
                1550: {
                    slidesPerView: 4,
                },
                1280: {
                    slidesPerView: 3,
                },
                757: {
                    slidesPerView: 2,
                },
                320: {
                    slidesPerView: 1,
                },
            }
        });
    }));
}



const swiper = new Swiper('.slider.wrapper', {
    loop: true,
    speed: 800,
    parallax: true,
    spaceBetween: 10,
    navigation: {
        nextEl: '.next',  
        prevEl: '.prev',  
    },
    pagination: {
        el: '.pagination',
        clickable: true, 
    },
    on: {
        slideChange: function () {
            let now = $(this.el).closest(".slider").find(".counter-slides .now");
            let total = $(this.el).closest(".slider").find(".counter-slides .total");

            now.text(this.realIndex + 1);
            total.text(this.slides.length);
        }
    }
});

// Функция для обновления типа пагинации в зависимости от ширины окна
// function updatePagination() {
//     if (window.innerWidth <= 1024) {
//         swiper.pagination.init(); // Инициализируем пагинацию
//         swiper.pagination.render(); // Отображаем пагинацию

//         // Устанавливаем постраничный счетчик
//         swiper.params.pagination.type = 'bullets';
//         swiper.pagination.render(); // Перерендеринг пагинации
//     } else {
//         swiper.params.pagination.type = 'fraction'; // Устанавливаем точечную пагинацию
//         swiper.pagination.render(); // Перерендеринг пагинации
//     }
// }

// // Вызываем функцию при инициализации
// updatePagination();

// Добавим слушатель событий на изменение размера окна
//
// $('.tabs-documents-container .swiper-slide a').click(function(e) {
//     e.preventDefault()
// })
// $('.tabs-documents-container .swiper-slide a').click(function(e) {
//     e.preventDefault();
//
//     const section = $(this).closest('.section');
//     const id = $(this).attr('data-tab');
//     const content = section.find('.tabs-content[data-tab="' + id + '"]');
//
//     section.find('.tabs-item a.active').removeClass('active');
//     $(this).addClass('active');
//
//     section.find('.tabs-content.active').fadeOut(300, function() {
//         $(this).removeClass('active');
//
//         content.fadeIn(300, function() {
//             content.addClass('active');
//         });
//     });
// });
// $('.document__block a').click(function(e) {
//     e.preventDefault();
// });
// window.addEventListener('resize', updateagination);P
document.getElementById("file-input").addEventListener("change", function() {
    const fileNameDisplay = document.getElementById("file-name");
    if (this.files && this.files.length > 0) {
        // Обновляем название файла с SVG-иконкой
        fileNameDisplay.innerHTML = this.files[0].name + 
            '<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="M14 4.5L5 13.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>' +
            '<path d="M5 4.5L14 13.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>' +
            '</svg>'; 
        fileNameDisplay.removeAttribute("hidden");
    } else {
        fileNameDisplay.textContent = ""; 
        fileNameDisplay.setAttribute("hidden", true); 
    }
});