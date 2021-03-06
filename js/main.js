// Collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});
// Show Nav Title on Scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-brand").text("Carol Corpuz Yoga");
    } else {
        $(".navbar-brand").text("");
    }
});

$(window).scroll(function() {
    if ($(".navbar").offset().top > 60) {
        $(".yoga").text("");
    } else {
        $(".yoga").text("Yoga. \xa0\xa0 Where You Are");
    }
});

// Page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$(function(){
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
    $('.navbar-toggle:visible').click();
});
}); 

$(function(){
$( "#bio" ).click(function() {
  $( this ).hide();
});
});

// WOW Animated Scrolling Effects

wow = new WOW({
        mobile: false
    });
    wow.init();

            
