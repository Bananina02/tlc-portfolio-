document.addEventListener('DOMContentLoaded', function (){
    gsap.registerPlugin(ScrollTrigger)

    // слайдер на главной

    if ($("[main-about-slider]").length > 0) {
        $("[main-about-slider]").each(function () {
            let e = $(this).closest(".main-banner-container").find('.arrow-container-inside .arrow-item.left')[0];
            let t = $(this).closest(".main-banner-container").find('.arrow-container-inside .arrow-item.right')[0];
            let dots = $(this).closest(".main-banner-container").find('.dots-container')[0];

            var imgSwiper = new Swiper($(this).closest(".section-about-banner").find("[main-about-img-slider]").find(".swiper")[0], {
                speed: 800,
                parallax: true,
                centeredSlides: false,
                loop: true,
                slidesPerView: 1,
                controller: {
                    by: 'slide'
                }
            });

            var mainSwiper = new Swiper($(this).find(".swiper")[0], {
                speed: 800,
                parallax: true,
                centeredSlides: false,
                slidesPerView: 1,
                loop: true,
                pagination: {
                    el: dots,
                    type: 'bullets',
                },
                navigation: {
                    nextEl: t,
                    prevEl: e
                },
                controller: {
                  by: 'slide',
                  control: imgSwiper
                },
                on: {
                    slideChange: function () {
                        let now = $(this.el).closest(".main-banner-container").find(".counter-slides .now");
                        let total = $(this.el).closest(".main-banner-container").find(".counter-slides .total");

                        now.text(this.realIndex + 1);
                        total.text(this.slides.length);
                    }
                }
            });
        });
    }

    // Свайпер Услуг

    if($("[service-main-slider]").length > 0){
        $("[service-main-slider]").each((function () {
            let e = $(this).closest(".section-services").find('.arrow-container-inside .arrow-item.left')[0],
                t = $(this).closest(".section-services").find('.arrow-container-inside .arrow-item.right')[0];
            var swiper = new Swiper($(this).find(".swiper")[0], {
                speed: 800,
                parallax: true,
                spaceBetween: 20,
                centeredSlides: false,
                slidesPerView: 4,
                navigation: {
                    nextEl: t,
                    prevEl: e
                },
                breakpoints:{
                    1550:{
                        slidesPerView: 4,
                    },
                    1280:{
                        slidesPerView: 3,
                    },
                    756:{
                        slidesPerView: 2,
                    },
                    320:{
                        slidesPerView: 1,
                    },
                }
            })
        }));
    }

    // Свайпер на на попапе детальной новостей

    if($("[news-pop-up-main-slider]").length > 0){
        $("[news-pop-up-main-slider]").each((function () {
            let e = $(this).closest(".pop-up-news-container").find('.arrow-container .arrow-item.left')[0],
                t = $(this).closest(".pop-up-news-container").find('.arrow-container .arrow-item.right')[0];
            var swiper = new Swiper($(this).find(".swiper")[0], {
                speed: 800,
                parallax: true,
                spaceBetween: 20,
                centeredSlides: false,
                slidesPerView: 1,
                navigation: {
                    nextEl: t,
                    prevEl: e
                },
                on: {
                    slideChange: function () {
                        let now = $(this.el).closest(".paragraph").find(".counter-slides .now");
                        let total = $(this.el).closest(".paragraph").find(".counter-slides .total");

                        now.text(this.realIndex + 1);
                        total.text(this.slides.length);
                    }
                }
            })
        }));
    }

    // Cвайпер видов перевозимых грузов

    if($("[types-slider-main]").length > 0){
        $("[types-slider-main]").each((function () {
            let e = $(this).closest(".section-types").find('.arrow-container-inside .arrow-item.left')[0],
                t = $(this).closest(".section-types").find('.arrow-container-inside .arrow-item.right')[0];
            var swiper = new Swiper($(this).find(".swiper")[0], {
                speed: 800,
                parallax: true,
                spaceBetween: 20,
                centeredSlides: false,
                slidesPerView: 4,
                navigation: {
                    nextEl: t,
                    prevEl: e
                },
                breakpoints:{
                    1550:{
                        slidesPerView: 4,
                    },
                    1280:{
                        slidesPerView: 3,
                    },
                    756:{
                        slidesPerView: 2,
                    },
                    320:{
                        slidesPerView: 'auto',
                    },
                }
            })
        }));
    }

    // Слайдер новостей

    if($("[news-slider-main]").length > 0){
        $("[news-slider-main]").each((function () {
            let e = $(this).closest(".section-media").find('.arrow-container-inside .arrow-item.left')[0],
                t = $(this).closest(".section-media").find('.arrow-container-inside .arrow-item.right')[0];
            var swiper = new Swiper($(this).find(".swiper")[0], {
                speed: 800,
                parallax: true,
                spaceBetween: 20,
                centeredSlides: false,
                slidesPerView: 4,
                navigation: {
                    nextEl: t,
                    prevEl: e
                },
                breakpoints:{
                    1550:{
                        slidesPerView: 4,
                    },
                    1280:{
                        slidesPerView: 3,
                    },
                    757:{
                        slidesPerView:2,
                    },
                    320:{
                        slidesPerView: 1,
                    },
                }
            })
        }));
    }


    // Селектрик

    $('.selectric').selectric();


    // Переключение классов на ссылках якорях

    const links = document.querySelectorAll('.anchor-link-inside a');

    window.addEventListener('scroll', function() {
        let scrollPos = window.scrollY;
        let windowHeight = window.innerHeight;

        links.forEach(link => {
            let targetId = link.getAttribute('href');

            if (targetId && targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    const sectionTop = targetElement.offsetTop;
                    const sectionBottom = sectionTop + targetElement.offsetHeight;

                    if (scrollPos + windowHeight / 2 >= sectionTop && scrollPos + windowHeight / 2 <= sectionBottom) {
                        links.forEach(l => l.classList.remove('active'));
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                }
            }
        });
    });

    // Кнопка бургера

    const burgerbtn = document.querySelector('.burger-icon');
    const burgerMenu = document.querySelector('.burger-menu');

    if (burgerbtn) {
        burgerbtn.addEventListener('click', function (e) {
            var scroll = $(window).scrollTop();
            this.classList.toggle('active');
            burgerMenu.classList.toggle('active');
            if (scroll < 10) {
                if (this.classList.contains('active')) {
                    document.querySelector('header').classList.add('active');
                } else {
                    document.querySelector('header').classList.remove('active');
                }
            }

            if (this.classList.contains('active')) {
                document.body.classList.add('hidden');
            } else {
                document.body.classList.remove('hidden');
            }
        });

        document.addEventListener('click', function(e) {
            if (!e.target.closest('.burger-icon') && !e.target.closest('.burger-menu')) {
                burgerbtn.classList.remove('active');
                burgerMenu.classList.remove('active');
                document.body.classList.remove('hidden');
            }
        });
    }

    // Добавляем/убираем классы у хедера


    $(document).ready(function() {
        let anchorLinkContainer = $('.anchor-link-container');
        let anchorOffset = 0;
        if (anchorLinkContainer.length) {
            anchorOffset = anchorLinkContainer.offset().top;
        }
        let isFixed = false;
        $(window).on('scroll', function() {
            let height = $(window).scrollTop();
            if ($('.header').hasClass('no-fixed')) {
                if (height > 10) {
                    $('header').addClass('no-fixed-active');
                    anchorLinkContainer.addClass('active');
                } else {
                    $('header').removeClass('no-fixed-active');
                    anchorLinkContainer.removeClass('active');
                }

                if (anchorLinkContainer.length) {
                    if (height >= anchorOffset && !isFixed) {
                        anchorLinkContainer.addClass('fixed');
                        isFixed = true;
                    } else if (height < anchorOffset && isFixed) {
                        anchorLinkContainer.removeClass('fixed');
                        isFixed = false;
                    }
                }
            }
            else {
                if (height > 10) {
                    $('header').addClass('active');
                }else if(height < 10 && $('.header-search a').hasClass('active')){
                    $('header').addClass('active');
                } else if (height < 10 && !$('.header-search a').hasClass('active')){
                    $('header').removeClass('active');
                }
                else if(!burgerbtn.classList.contains('active')) {
                    $('header').removeClass('active');
                }
            }
        });
    });


    // Цепляем ссылки-якори

    const links2 = document.querySelectorAll('.anchor-link-inside a[href^="#"]');

    links2.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                $('.anchor-link-container').removeClass('active');
                $('header').removeClass('no-fixed-active');
            }
        });
    });


    // табы

    $('.tabs-item a').click(function(e) {
        e.preventDefault();

        const section = $(this).closest('.section');
        const id = $(this).attr('data-tab');
        const content = section.find('.tabs-content[data-tab="' + id + '"]');

        section.find('.tabs-item a.active').removeClass('active');
        $(this).addClass('active');

        section.find('.tabs-content.active').fadeOut(300, function() {
            $(this).removeClass('active');

            content.fadeIn(300, function() {
                content.addClass('active');
            });
        });
    });

    // вызываем форму поиска

    const $btnSearch = $('.header-search a');
    const $searchForm = $('.header').find('.search-form-container');

    if ($btnSearch.length) {
        $btnSearch.on('click', function(e) {
            e.preventDefault();
            $(this).toggleClass('active')
            $searchForm.slideToggle();
            if ($('.header').hasClass('active')) {
                console.log("все ок");
            } else {
                $('.header').toggleClass('active')
            }
        });
    }



    // анимация поинтов на карте

    // gsap.to(".map-point-item", {
    //     scale: 1.15,
    //     duration: 0.5,
    //     yoyo: true,
    //     repeat: -1,
    //     ease: "circ.out",
    // });

    // табы на карте

    $('.map-point-item').click(function(e) {
        const section = $(this).closest('.section');
        const id = $(this).attr('data-tab');
        const content = section.find('.terminal-product-container .terminal-product[data-tab="' + id + '"]');

        if (!$(this).hasClass('perspective')){
            section.find('.map-point-item.activity').removeClass('activity');
            $(this).addClass('activity');
        } else {
            return
        }

        const activeContent = section.find('.terminal-product-container .terminal-product.active');

        if (activeContent.length) {
            activeContent.fadeOut(400, function() {
                $(this).removeClass('active');
                if (content.length) {
                    content.addClass('active').fadeIn(200);
                }
            });
        } else {
            if (content.length) {
                content.addClass('active').fadeIn(200);
            }
        }
    });

    // Слайдер тлц на карте

    if($("[list-map-element-slider]").length > 0){
        $("[list-map-element-slider]").each((function () {
            let e = $(this).closest(".section-map").find('.arrow-container-inside .arrow-item.left')[0],
                t = $(this).closest(".section-map").find('.arrow-container-inside .arrow-item.right')[0];
            var swiper = new Swiper($(this).find(".swiper")[0], {
                speed: 800,
                parallax: true,
                spaceBetween: 20,
                centeredSlides: false,
                slidesPerView: 4,
                navigation: {
                    nextEl: t,
                    prevEl: e
                },
                breakpoints:{
                    1550:{
                        slidesPerView: 4,
                    },
                    1280:{
                        slidesPerView: 3,
                    },
                    757:{
                        slidesPerView:2,
                    },
                    320:{
                        slidesPerView: 1,
                    },
                }
            })
        }));
    }

    if($("[history-data-slider]").length > 0){
        $("[history-data-slider]").each((function () {
            let e = $(this).closest(".section").find('.arrow-container-inside .arrow.left')[0],
                t = $(this).closest(".section").find('.arrow-container-inside .arrow.right')[0];
            var swiper = new Swiper($(this).find(".swiper")[0], {
                speed: 800,
                slidesPerView: 'auto',
                parallax: true,
                navigation: {
                    nextEl: t,
                    prevEl: e
                },
            })
        }));
    }


    // Анимация на карте детальной страницы

        var hasAnimated = false;

        function placeDotsOnMap() {
            if (!hasAnimated) {
                hasAnimated = true;

                $(".section-main-objects .main-objects-mapsdots").addClass("activate");

                var elementsList = $(".main-objects-mapsdots-item");

                $(elementsList).each(function(index) {
                    var elementItem = $(this);
                    var elementHeight = $(this).data("itemheight") + "px";
                    var elementSphere = parseInt($(this).data("itemheight")) - 20 + "px";

                    setTimeout(function() {
                        elementItem.addClass("active");
                        elementItem.find(".item-sphere-line").css("height", elementHeight);
                        elementItem.find(".item-sphere-container").css("bottom", elementHeight);
                    }, index * 300);
                });
            }
        }

        $(window).on('scroll', function() {
            if ($(".section-main-objects").length > 0) {
                var currentScroll = $(window).scrollTop();
                var topBlock = $(".section-main-objects").offset().top;
                var heightBlock = $(".section-main-objects").innerHeight();

                if (currentScroll >= (topBlock - heightBlock / 2)) {
                    placeDotsOnMap();
                }
            }
        });


        // слайдер документов

    if($("[documents-main-slider]").length > 0){
        $("[documents-main-slider]").each((function () {
            let e = $(this).closest(".section-documents").find('.arrow-container-inside .arrow.left')[0],
                t = $(this).closest(".section-documents").find('.arrow-container-inside .arrow.right')[0];
            var swiper = new Swiper($(this).find(".swiper")[0], {
                speed: 800,
                parallax: true,
                spaceBetween: 20,
                centeredSlides: false,
                slidesPerView: 4,
                navigation: {
                    nextEl: t,
                    prevEl: e
                },
                breakpoints:{
                    1550:{
                        slidesPerView: 4,
                    },
                    1280:{
                        slidesPerView: 3,
                    },
                    756:{
                        slidesPerView: 2,
                    },
                    320:{
                        slidesPerView: 1,
                    },
                }
            })
        }));
    }

    // табы "техническое оснащение"

    $('.tabs-picture-item a').click(function(e) {
        e.preventDefault();

        const section = $(this).closest('.section');
        const id = $(this).attr('data-tab');
        const content = section.find('.technical-equipment-content-right .img[data-tab="' + id + '"]');

        section.find('.tabs-picture-item a.active').removeClass('active');
        $(this).addClass('active');

        section.find('.technical-equipment-content-right .img.active').removeClass('active').hide();
        content.addClass('active').show();
        content.fadeIn(5500);
    });

    // свайпер переключателей табов только для планшетов

    if($("[tabs-item-slider]").length > 0){
        if (window.innerWidth < 1024){
            $("[tabs-item-slider]").each((function () {
                var swiper = new Swiper($(this).find(".swiper")[0], {
                    speed: 800,
                    parallax: true,
                    centeredSlides: false,
                    slidesPerView: "auto",
                })
            }));
        }
    }

    // Анимация пальца на карте

    gsap.to(".touch-icon", {
        x: 10,
        duration: 0.5,
        yoyo: true,
        repeat: -1,
        ease: "none",
    });

    // свайпер для мобилок

    if($("[mobile-about-slider]").length > 0){
        if (window.innerWidth < 767){
            $("[mobile-about-slider]").each((function () {
                var swiper = new Swiper($(this).find(".swiper")[0], {
                    speed: 800,
                    parallax: true,
                    centeredSlides: false,
                    slidesPerView: "auto",
                })
            }));
        }
    }

    // Свайпер ссылок якорей для планшетов

    if($("[anchor-about-slider]").length > 0){
        if (window.innerWidth < 1024){
            $("[anchor-about-slider]").each((function () {
                let e = $(this).closest(".section-documents").find('.arrow-container-inside .arrow.left')[0],
                    t = $(this).closest(".section-documents").find('.arrow-container-inside .arrow.right')[0];
                var swiper = new Swiper($(this).find(".swiper")[0], {
                    speed: 800,
                    parallax: true,
                    spaceBetween: 30,
                    centeredSlides: false,
                    slidesPerView: 'auto',
                    freeMode: true,
                    navigation: {
                        nextEl: t,
                        prevEl: e
                    },
                    breakpoints:{
                        756:{
                            slidesPerView: 'auto',
                            spaceBetween: 30,
                        },
                        320:{
                            slidesPerView: 'auto',
                            spaceBetween: 20,
                        },
                    }
                })
            }));
        }
        }

    // Свайпер для мобилок в блоке "Техническое оснащение"
    if($("[mobile-tech-slider]").length > 0){
        if (window.innerWidth < 767){
            $("[mobile-tech-slider]").each((function () {
                var swiper = new Swiper($(this).find(".swiper")[0], {
                    speed: 800,
                    parallax: true,
                    spaceBetween: 20,
                    centeredSlides: false,
                    slidesPerView: 1,
                })
            }));
        }
    }

    // Вызов попапа при нажатии на элемент карты

    const pointMap = document.querySelectorAll('.map-point-item');
    pointMap.forEach(el => {
        el.addEventListener('click', function (e) {
            if (window.innerWidth > 1025){
                e.preventDefault()
            }
        })
    })


    // Временный отключаем поведение ссылок у карточек услуг
    // const serviceLinks = document.querySelectorAll('.service-item a');
    // serviceLinks.forEach(link => {
    //     link.addEventListener('click', function(event) {
    //         event.preventDefault();
    //     });
    // });

    // Переключение табов через селект в футере

    $('#get_value').selectric();
    function switchTab() {
        const selectedValue = $('#get_value').find('option:selected').data('address');
        $('#select_value address').hide();
        $('#select_value address[data-address="' + selectedValue + '"]').show();
    }
    switchTab();
    $('#get_value').on('change', switchTab);

})