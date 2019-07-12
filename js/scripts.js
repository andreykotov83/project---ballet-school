$(document).ready(function() {
    var swiper = new Swiper('.swiper1', {
        speed: 1000,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var swiper = new Swiper('.swiper2', {
        speed: 1000,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });

    $(window).on('scroll', function() {
        if ($(window).scrollTop()) {
            $('header').addClass('scro');
        } else {
            $('header').removeClass('scro');
        }
        if ($(this).scrollTop() >= 0) {
            $('#link1').addClass('activ');
        }
        if ($(this).scrollTop() > 700) {
            $('#link1').removeClass('activ');
        }
        if ($(this).scrollTop() > 700) {
            $('#link2').addClass('activ');
        }
        if ($(this).scrollTop() > 700) {
            $('#link2').addClass('activ');
        } else {
            $('#link2').removeClass('activ');
        }
        if ($(this).scrollTop() > 2330) {
            $('#link2').removeClass('activ');
        }
        if ($(this).scrollTop() > 2330) {
            $('#link3').addClass('activ');
        } else {
            $('#link3').removeClass('activ');
        }
        if ($(this).scrollTop() > 3335) {
            $('#link3').removeClass('activ')
        }
        if ($(this).scrollTop() > 4600) {
            $('#link4').addClass('activ')
        } else {
            $('#link4').removeClass('activ');
        }
    });
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    // document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,1)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    // document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "rgba(0,0,0,0)"
}

// function openSearch() {
//     document.getElementById('myOverlay').style.display = "block";
// }

// function closeSearch() {
//     document.getElementById('myOverlay').style.display = "none";
// }