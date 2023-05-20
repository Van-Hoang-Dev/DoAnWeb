// Owl Carousel
$('.owl-3').owlCarousel({
    loop: true,
    margin: 30,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

$('.owl-2').owlCarousel({
    loop: true,
    margin: 30,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
})

$('.owl-experience').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})
$('.owl-logo').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})

$('.owl-info').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

//Sử lý thanh cuộn của navigation
// let imageContainer = document.getElementsByClassName("navbar-brand")[0];
// let originalImage = document.getElementsByClassName("logo")[0];
// const nav = document.querySelector(".navigation");
// window.addEventListener("scroll", function () {
//     nav.classList.toggle("fixed-top", window.scrollY > 10);
//     nav.classList.toggle("nav-scroll", window.scrollY > 10);

//     let newImage = document.createElement('img');
//     newImage.src = "public/images/logo-dark.png";
//     newImage.alt = 'Travol Agency';

//     imageContainer.replaceChild(newImage, originalImage);
// });

