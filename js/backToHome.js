$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop()){
            $('#back-to-home').fadeIn();
        }else {
            $('back-to-home').fadeOut();
        }
    });
});