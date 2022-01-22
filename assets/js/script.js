$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky")
        }else{
            $('.navbar').removeClass("sticky")
        }
        
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