$(document).ready(function() {
    // index
    $('.m-menu').click(function(e) {
        e.preventDefault();
        $('.navbar-header-menu').toggleClass("jq-show-menu");
    });
    // order
    $('.heart-icon').click(function(e) {
        e.preventDefault();
        $(this).find('.fa-heart').toggleClass("far");
        $(this).find('.fa-heart').toggleClass("fas");
    });
    $('.m-order-nav-menu').click(function(e) {
        e.preventDefault();
        $('.order-nav-menu').toggleClass("jq-show-menu");
    });
});