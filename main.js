


$(document).ready(function() {
  $('.about-anchor').localScroll()


//Help with fixed nav on scroll from:
//http://stackoverflow.com/questions/22187317/jquery-positionfixed-navbar-by-scrolling-the-page
    $(document).scroll(function () {
        var scroll = $(this).scrollTop();
        var scrollFire = $(".container").position();
        if (scroll > scrollFire.top) {
            $('nav ul').css({"position":"fixed","top":"0"});
        } else {
            $('nav ul').css({"position":"static","top":"auto"});
        }
    });
});
