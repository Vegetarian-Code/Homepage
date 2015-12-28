//= require bootstrap.min

console.log("Pages.js entered")
// get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
$( document ).ready(function() {
    var mainbottom = $('#scroll-point').offset().top;

    // on scroll,
    $(window).on('scroll',function(){
        console.log("window ready")
        // we round here to reduce a little workload
        var stop = Math.round($(window).scrollTop());

        if (stop > mainbottom) {
            $('.navbar-fixed-top').addClass('past-main');
        } else {
            $('.navbar-fixed-top').removeClass('past-main');
        }
    });
});


