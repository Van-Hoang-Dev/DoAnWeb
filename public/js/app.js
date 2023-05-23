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
            items: 2,
            dots: true,
            nav: false
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
// const navbar = document.querySelector('.navbar');
// const logoNav = document.querySelector('.logo');
// const navLinks = document.querySelectorAll('.nav-link')
// console.log(navLinks);

// window.onscroll = function(){mySrollDown()};
// function mySrollDown(){
//     if(document.documentElement.scrollTop > 50){
//         navbar.classList.add('nav-scroll');
//         navbar.classList.add('bg-white-edit');
//         logoNav.setAttribute('src',"public/images/logo-dark.png" );
//         navLinks.forEach(navlink => {
//             navlink.style.color = "#676977";
//         });
//     }
//     else {
//         navbar.classList.remove('fixed-top');
//         navbar.classList.remove('bg-white-edit');
//         logoNav.setAttribute('src',"public/images/logo.png" );
//         navLinks.forEach(navlink => {
//             navlink.style.color = "#fff";
//         });
//     }
// }

