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
        let act = $('.menu').hasClass("active");
        if(act){
            $('#menu-btn').css({'color':'#FBFBFB'})
        }else{
            $('#menu-btn').css({'color':'#1B1B1B'})
        }
    });
})