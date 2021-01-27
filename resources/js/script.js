$(document).ready(()=>{

    //For the sticky Navigation
    $('.js--section-features').waypoint((direction)=>{
        if(direction=='down'){
            $('nav').addClass('sticky');

        }else{
            $('nav').removeClass('sticky');
        }
    },{
        offset:'60px;'
    })

    // Scrolls by button
    $('.js--scroll-to-plans').click(()=>{
        console.log('cli')
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top},1000);
    })
    $('.js--scroll-to-features').click(()=>{
        console.log('cli')
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top},1000);
    })


    // Scroll by Navbar

    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
        ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
            scrollTop: target.offset().top
            }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
                return false;
            } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
            };
            });
        }
        }
    });
    // Animation
    $('.js--wp-1').waypoint((direction)=>{
        $('.js--wp-1').addClass('animated animate__animated animate__fadeInDown');
    },{offset:'50%;'})
    $('.js--wp-2').waypoint((direction)=>{
        $('.js--wp-2').addClass('animated animate__animated animate__zoomInDown');
    },{offset:'50%;'})
    $('.js--wp-logo').waypoint((direction)=>{
        $('.js--wp-logo').addClass('animated animate__animated animate__rotateIn');
    },{offset:'50%;'})

    // MOBILE NAVBAR
    $('.js--mobile-nav').click(()=>{
        $('.main-nav').slideToggle(200);
        var ico = $('.js--mobile-nav').attr('name');
        if(ico=='menu'){
            $('.js--mobile-nav').attr('name','close');
        }else{
            $('.js--mobile-nav').attr('name','menu');
        }
        
    })



});