ymaps.ready(initMap);

function initMap() {
    const myMap = new ymaps.Map('map', {
        center: [55.751574, 37.573856], // Центр карты
        zoom: 10,
        controls: [] // Убираем все элементы управления
    });

    // Создание метки с вашей иконкой
    const myPlacemark = new ymaps.Placemark([55.751574, 37.573856], {
        hintContent: 'Это подсказка', // Подсказка для метки
        balloonContent: 'Это содержимое балуна' // Содержимое для балуна
    }, {
        // Настройки иконки
        iconLayout: 'default#image',
        iconImageHref: '../img/Subtract.svg', // Путь к вашей иконке
        iconImageSize: [30, 42], // Размер вашей иконки [ширина, высота]
        iconImageOffset: [-15, -42] // Смещение иконки, чтобы центрировать её
    });

    // Добавляем метку на карту
    myMap.geoObjects.add(myPlacemark);
}

// Отключение авто-открытия балуна
myPlacemark.balloon.open = function() {};