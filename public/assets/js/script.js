$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0})
    });

    // toggle menu navbar script
    $('.menuBtn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menuBtn i').toggleClass("active");
        let act = $('.menu').hasClass("active");
        if(act){
            $('#menu-btn').css({'color':'#FBFBFB'})
        }else{
            $('#menu-btn').css({'color':'#1B1B1B'})
        }
    });

    // animation type
    var typed = new Typed(".typing", {
        strings: ["use google.", "make you happy.", "code.", "hug you :3", "think."],
        typeSpeed: 150,
        backSpeed: 80,
        loop: true
    });

    let type = new Typed(".whoIAm", {
        strings: ["Student", "Programer", "Pro gamer", "Human", ],
        typeSpeed: 150,
        backSpeed: 80,
        loop: true
    })

    // owl carousel 
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
})