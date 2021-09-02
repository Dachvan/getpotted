import Select from "./select.js"

const selectElements = document.querySelectorAll("[data-custom]")

selectElements.forEach(selectElement => {
    new Select(selectElement)
})
$(document).ready(function() {
    headerPosition();
    $(window).scroll(function() {
        headerPosition();
    });
    tabs($('.tabs-category__element'), $('.tabs-category__block'));
    tabs($('.tabs-brand__element'), $('.tabs-brand__block'));

    $('.js-search').on('click', function() {
        $(this).parents('.top-panel').toggleClass('active');
        $('.js-search-panel').toggleClass('active');
    });
    $('.js-search-poly').on('keyup', function() {
        var textPoly = $(this).val().length;
        if (textPoly > 0) {
            $('.js-search-button, .js-search-icon').addClass('active');
        } else {
            $('.js-search-button, .js-search-icon').removeClass('active');
        }
    });
    $('.js-menu-obj-pic').mouseenter(function() {
        var pic = $(this).attr('data-img');
        if (pic) {
            $('.js-menu-pic').attr('src', pic).addClass('show');
        }
    }).mouseleave(function() {
        $('.js-menu-pic').removeClass('show');
    });
    $('.js-menu').mouseenter(function() {
        $('.header, .top-panel').addClass('theme');
    }).mouseleave(function() {
        $('.header, .top-panel').removeClass('theme');
    });
    $('.js-mobile-menu').on('click', function() {
        $(this).toggleClass('active');
        $(this).find('.js-menu-toggle').toggle();
    });
    $('.js-menu-button').on('click', function() {
        $('body').toggleClass('overflow');
        $('.mobile-menu').toggleClass('active');
    });
    $('.js-mobile-search-btn').on('click', function() {
        $('body').toggleClass('overflow');
        $('.mobile-search').toggleClass('active');
    });
    if ($(window).width() <= 568) {
        $('.js-footer-menu').on('click', function() {
            $(this).toggleClass('active').next().toggle();
        });
    }
    const swiperCategory = new Swiper('.js-category-slider', {
        spaceBetween: 30,
        scrollbar: {
            el: '.category__scrollbar',
        },
        breakpoints: {
            1025: {
                slidesPerView: 6,
                spaceBetween: 30,
            },
            569: {
                slidesPerView: 3,
                slidesPerColumn: 2,
                spaceBetween: 20,
            },
            320: {
                slidesPerView: 'auto',
                spaceBetween: 10,
                //freeMode: true,
            }
        }
    });
    const swiperMain = new Swiper('.js-main-slider', {
        pagination: {
            el: '.main-slider-block__pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.main-slider-block__next',
            prevEl: '.main-slider-block__prev',
        },
        effect: 'fade',
    });
    sliderTabs();
});

function headerPosition() {
    var top = $(document).scrollTop();
    if (top < 1) {
        $('.header').removeClass('fixed');
    } else {
        $('.header').addClass('fixed');
    }
}

function tabs(classNameNav, classNameTab) {
    classNameTab.not(':first').addClass('hide');
    classNameNav.on('click', function() {
        classNameNav.removeClass('active').eq($(this).index()).addClass('active');
        classNameTab.addClass('hide').eq($(this).index()).removeClass('hide');
    }).eq(0).addClass('active');

}

function sliderTabs() {
    document.querySelectorAll('.js-tabs-block').forEach(n => {
        var swiperTabs = new Swiper(n.querySelector('.js-tabs-slider'), {
            slidesPerView: 4,
            navigation: {
                nextEl: n.querySelector('.tabs-slider-next'),
                prevEl: n.querySelector('.tabs-slider-prev'),
            },
            breakpoints: {
                1275: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
                1025: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                569: {
                    spaceBetween: 20,
                    slidesPerView: 2,
                },
                320: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
            }
        });
    });
}