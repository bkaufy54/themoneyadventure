$(document).ready(function() {
    var stickyNav = $(".nav");

    $(window).scroll(function() {
        if ( $(this).scrollTop() > 150) {
            stickyNav.addClass("main-nav-scrolled");
        } else {
            stickyNav.removeClass("main-nav-scrolled");
        }
    });
});





$('#close').click(function(){
   $('#emailForm').hide(); 
});