(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Roadmap carousel
    $(".roadmap-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        dots: false,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


})(jQuery);


$('[data-bs-toggle="collapse"]').on('mouseenter', function () {
    $(this).parents('.accordion-item').find('.collapse').collapse('show');
});

$('[data-bs-toggle="collapse"]').on('mouseleave', function () {
    $(this).parents('.accordion-item').find('.collapse').collapse('show');
});


//toggle Read Button
function readBtn() {
    var cards = document.getElementsByClassName("extra-card");
    var btnText = document.getElementById("readBtn");

    Array.from(cards).forEach((card) => {
        if (card.style.display == "none") {
            card.style.display = "block";
            btnText.innerHTML = "Show Less";
        } else {
            card.style.display = "none";
            btnText.innerHTML = "Show More";
        }
    })
}


$(function () {
    $('.owl-carousel').owlCarousel({
        center: false,
        items: 1,
        loop: true,
        stagePadding: 0,
        margin: 20,
        smartSpeed: 1000,
        autoplay: true,
        nav: true,
        dots: true,
        pauseOnHover: false,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        navContainer: '.gallery .custom-nav',
        responsive: {
            600: {
                margin: 20,
                nav: true,
                items: 2
            },
            1000: {
                margin: 20,
                stagePadding: 0,
                nav: true,
                items: 3
            }
        }
    });
})


const height = (elem) => {

    return elem.getBoundingClientRect().height

}

const distance = (elemA, elemB, prop) => {

    const sizeA = elemA.getBoundingClientRect()[prop]
    const sizeB = elemB.getBoundingClientRect()[prop]

    return sizeB - sizeA

}

const factor = (elemA, elemB, prop) => {

    const sizeA = elemA.getBoundingClientRect()[prop]
    const sizeB = elemB.getBoundingClientRect()[prop]

    return sizeB / sizeA

}

document.querySelectorAll('.img-card').forEach((elem) => {

    const head = elem.querySelector('.img-card__head')
    const image = elem.querySelector('.img-card__image')
    // const author = elem.querySelector('.img-card__author')
    const body = elem.querySelector('.img-card__body')
    // const foot = elem.querySelector('.img-card__foot')

    elem.onmouseenter = () => {

        elem.classList.add('hover')

        const imageScale = 1 + factor(head, body, 'height')
        image.style.transform = `scale(${imageScale})`

        const bodyDistance = height(foot) * -1
        body.style.transform = `translateY(${bodyDistance}px)`

        // const authorDistance = distance(head, author, 'height')
        // author.style.transform = `translateY(${ authorDistance }px)`

    }

    elem.onmouseleave = () => {
        elem.classList.remove('hover')
        image.style.transform = `none`
        body.style.transform = `none`
        // author.style.transform = `none`
    }

})


//Testimonial
$('.carousel[data-type="multi"] .item').each(function () {
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < 3; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});