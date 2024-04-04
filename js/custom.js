// Fixed Navbar
jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() >= 50) {
        jQuery('body').addClass('header-sticky');
    }
    else {
        jQuery('body').removeClass('header-sticky');
    }
});

//for mobile menu trigger
jQuery(document).ready(function() {
    // for toggle menu
    jQuery('.navbar-hambarger').click(function() {
        jQuery('body').toggleClass('menu-open');
    });
    jQuery('.menu-close').click(function() {
        jQuery(' body').removeClass('menu-open');
    });
});
   