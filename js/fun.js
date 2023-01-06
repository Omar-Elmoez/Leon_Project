$(document).ready(function(){
    $('.light-mode').hide();
    $('.go-up').hide();
    $('.js-list').hide();

    $('.dark-mode').click(function(){
        $(this).parent().css('background-color','black');
        $('body').css('background-color','black');
        $('.overlay .landing .intro-text p').css('color','#10CAB7');
        $('.dark-mode').hide();
        $('.light-mode').show();
    });

    $('.light-mode').click(function(){
        $(this).parent().css('background-color','rgba(0, 97, 95, 0.664)');
        $('.overlay .landing .intro-text p').css('color','#333');
        $('.light-mode').hide();
        $('.dark-mode').show();
    });

    $(window).scroll(function(){
        if ($(this).scrollTop() >= 800) {
            $('.go-up').show();
        }
        else {
            $('.go-up').hide();
        }
    });

    var bar = $('header .container .links .icon');

    bar.click(function () {
        $('.js-list').fadeToggle();
    });
});