$(function() {
    $('.item').click(function(e) {
        $(e.target).removeClass('enter')
        $(e.target).addClass('swipeout')
    });

})