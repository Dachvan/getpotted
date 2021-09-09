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
    tabs($('.tabs-category__element'), $('.tabs-category__block'), false);
    tabs($('.tabs-brand__element'), $('.tabs-brand__block'), false);
    tabs($('.js-element-filter'), $('.js-block-filter'), true);
    tabs($('.js-show-filter'), $('.js-show-block-filter'), true);
    tabs($('.js-sort-filter'), $('.js-sort-block-filter'), true);

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
    $('.js-choose-colour').mouseenter(function() {
        var pic = $(this).attr('data-img');
        if (pic) {
            $(this).parents('.product-block').find('.js-item-pic').attr('src', pic);
        }
    }).mouseleave(function() {
        $(this).parents('.product-block').find('.js-item-pic').attr('src', $(this).parents('.product-block').find('.js-item-pic').data('img'));
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

    $('.js-mobile-sort').on('click', function(){
        $('.js-mobile-view,.js-mobile-view-content').removeClass('active');
        $(this).toggleClass('active');
        $('.js-mobile-sort-content').toggleClass('active');
    });
    $('.js-mobile-view').on('click', function(){
        $('.js-mobile-sort,.js-mobile-sort-content').removeClass('active');
        $(this).toggleClass('active');
        $('.js-mobile-view-content').toggleClass('active');
    });

    $('.js-popular-filter').on('click', function(){
        $(this).toggleClass('active').next().toggleClass('active');
    });
    $('.js-mobile-filter').on('click', function(){
        $('body').toggleClass('overflow');
        setTimeout(function(){
            $('header').toggleClass('hide');
            $('.js-filter-bg').toggleClass('active');
            $('.js-filter-block').toggleClass('active');
        }, 200);
    });

    $('.js-toggle-filter').on('click', function(){
        $(this).toggleClass('active').next().toggleClass('active');
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
            }
        }
    });
    const swiperSection = new Swiper('.js-section-slider', {
        spaceBetween: 30,
        scrollbar: {
            el: '.section-slider__scrollbar',
        },
        breakpoints: {
            1025: {
                slidesPerView: 'auto',
                spaceBetween: 30,
            },
            320: {
                slidesPerView: 'auto',
                spaceBetween: 15,
            }
        }
    });

    const swiperTopChoise = new Swiper('.js-top-choise-slider', {
        navigation: {
            nextEl: '.choise-items-slider__next',
            prevEl: '.choise-items-slider__prev',
        },
        slidesPerView: 3,
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            320: {
                slidesPerView: 2,
                spaceBetween: 11,
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
    const swiperViewed = new Swiper('.js-viewed-slider', {
        slidesPerView: 4,
        navigation: {
            nextEl: '.viewed-slider__next',
            prevEl: '.viewed-slider__prev',
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

function tabs(classNameNav, classNameTab, filter) {
    if(filter == false){
        classNameTab.not(':first').addClass('hide');
        classNameNav.on('click', function() {
            classNameNav.removeClass('active').eq($(this).index()).addClass('active');
            classNameTab.addClass('hide').eq($(this).index()).removeClass('hide');
        }).eq(0).addClass('active');
    }else{
        classNameNav.on('click', function(){
            if(!$(this).hasClass('active')){
                classNameNav.removeClass('active');
                classNameTab.removeClass('active');
                $(this).addClass('active').parent().addClass('active');
                classNameTab.parent().addClass('active');
                classNameTab.eq($(this).index()).addClass('active');
            }else{
                $(this).removeClass('active').parent().removeClass('active');
                classNameTab.parent().removeClass('active');
                classNameTab.eq($(this).index()).removeClass('active');
            }
        });
        $(document).mouseup(function (e){
            var div = classNameTab;
            if (!div.is(e.target) && div.has(e.target).length === 0) {
                classNameNav.removeClass('active').parent().removeClass('active');
                classNameTab.removeClass('active').parent().removeClass('active');
            }
        });
    }
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