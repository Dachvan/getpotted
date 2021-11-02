$(document).ready(function() {
    headerPosition();
    $(window).scroll(function() {
        headerPosition();
    });
    tabs($('.tabs-auth__element'), $('.tabs-auth__block'), false);
    tabs($('.tabs-category__element'), $('.tabs-category__block'), false);
    tabs($('.tabs-brand__element'), $('.tabs-brand__block'), false);
    tabs($('.tabs-items__element'), $('.tabs-items__block'), false);
    tabs($('.tabs-detail__element'), $('.tabs-detail__block'), false);
    tabs($('.tabs-detail-mobile-nav__element'), $('.tabs-detail__block'), false);
    tabs($('.accessories-item'), $('.basket-accessories__block'), false);
    tabs($('.tabs-accessories__element'), $('.tabs-accessories__block'), false);
    tabs($('.tabs-accessories-mobile-nav__element'), $('.tabs-accessories__block'), false);
    tabs($('.js-element-filter'), $('.js-block-filter'), true);
    tabs($('.js-show-filter'), $('.js-show-block-filter'), true);
    tabs($('.js-sort-filter'), $('.js-sort-block-filter'), true);

    mobileTabs($('.js-tabs-detail-mobile'), $('.js-detail-value'))
    mobileTabs($('.js-tabs-accessories-mobile'), $('.js-accessories-value'))

    $('.scrollbar-inner').scrollbar();
    $('.js-options-toggle').on('click', function(){
        $(this).toggleClass('active');
        $(this).next().toggleClass('active');
    });


    $('.complect-item input:checkbox').on('click', function(){
        $(this).parents('.complect-item').toggleClass('active');
        calcKit();
        switch($('.complect-item input:checkbox').length){
            case 2:
                checkKit(2);
                break;
            case 3:
                checkKit(3);
                break;
        }
    });
    $('.js-choose-complect').on('click', function(){
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            $(this).find('.complect-result__checkbox_text').text('Check none');
            $(this).parents('.complects-block').find('.complects-block__items .complect-item').addClass('active').find('input:checkbox').prop('checked', true);
        }else{
            $(this).find('.complect-result__checkbox_text').text('Check all items');
            $(this).parents('.complects-block').find('.complects-block__items .complect-item').removeClass('active').find('input:checkbox').prop('checked', false);
        }
        calcKit();
    });
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
    chooseColourInit();

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
    swiperTopChoiseInit();


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
    const richSlider = new Swiper('.js-rich-slider', {
        pagination: {
            el: '.rich-content__pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.rich-content__next',
            prevEl: '.rich-content__prev',
        },
    });
    const photoSlider = new Swiper('.js-photo-slider', {
        slidesPerView: 5,
        spaceBetween: 30,
        navigation: {
            nextEl: '.reviews-photo-slider__next',
            prevEl: '.reviews-photo-slider__prev',
        },
    });
    const accessoriesSlider = new Swiper('.js-accessories-slider', {
        slidesPerView: 3,
        navigation: {
            nextEl: '.basket-accessories-slider__next',
            prevEl: '.basket-accessories-slider__prev',
        },
        breakpoints: {
            1025: {
                spaceBetween: 50,
            },
            320: {
                spaceBetween: 10,
            }
        }
    });
    
    var thumbsCartImagesSlider = new Swiper('.js-thumbs-cart-images', {
        slidesPerView: 4,
        spaceBetween: 10,
        navigation: {
            nextEl: '.cart-images-slider__next',
            prevEl: '.cart-images-slider__prev',
        },
        breakpoints: {
            1025: {
                direction: 'vertical',
            },
            320: {
                direction: 'horizontal',
            }
        }
    });
    var cartImageSlider = new Swiper('.js-cart-image', {
        pagination: {
            el: '.cart-image-slider__pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.cart-image-slider__next',
            prevEl: '.cart-image-slider__prev',
        },
        zoom: true,
        thumbs: {
            swiper: thumbsCartImagesSlider
        },
    });
    $('.js-zoom').on('click', function(){
        cartImageSlider.zoom.toggle();
    });

    document.querySelectorAll('.items-slider').forEach(n => {
        var swiper = new Swiper(n.querySelector('.js-items-slider'), {
            slidesPerView: 4,
            navigation: {
                nextEl: n.querySelector('.items-slider__next'),
                prevEl: n.querySelector('.items-slider__prev'),
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

    sliderTabs();
    pageSlide(200);
});

function headerPosition() {
    var top = $(document).scrollTop();
    if (top < 1) {
        $('.header').removeClass('fixed');
    } else {
        $('.header').addClass('fixed');
    }
}
function mobileTabs(mainClass, valueClass){
    mainClass.on('click', function(){
        $(this).toggleClass('open');
    });
    $('.js-tabs-element').on('click', function(){
        valueClass.text($(this).text());
    });
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

function swiperTopChoiseInit (){
    new Swiper('.js-top-choise-slider', {
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
}


function chooseColourInit() {
    $('.js-choose-colour').mouseenter(function () {
        var pic = $(this).attr('data-img');
        if (pic) {
            $(this).parents('.product-block').find('.js-item-pic').attr('src', pic);
        }
    });
}

function checkKit(count){
    if($('.complect-item input:checkbox:checked').length == count){
        $('.js-choose-complect').addClass('active');
        $('.js-choose-complect').find('.complect-result__checkbox_text').text('Check none');
    }else{
        $('.js-choose-complect').removeClass('active');
        $('.js-choose-complect').find('.complect-result__checkbox_text').text('Check all items');
    }
}
function calcKit(){
    var summ = 0;
    $('.complect-item input:checkbox').each(function(){
        if($(this).is(":checked")){
            summ += parseFloat($(this).data('price'));
        }
    });
    $('.complect-result .complect-result__value span').text(summ);
}
function pageSlide(offset){
    var margin = offset;
    $('[href*="#"]').on('click', function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - margin + 'px' 
        },
        {
            duration: 1600,
            easing: "swing"
        });
        return false;
    });
}