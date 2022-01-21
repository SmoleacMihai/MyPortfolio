$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky") 
        }else{
            $('.navbar').removeClass("sticky")
        }
        if(this.scrollY < 20){
            $('#menu-btn').css({'color':'black'})
        }
    });
    
    // toggle menu navbar script
    $('.menuBtn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('#menu-btn').click(function(){
            $(this).css({'color':'white'})
        });
    });
})