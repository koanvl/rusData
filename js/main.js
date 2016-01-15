$(document).ready(function() {

  //clear-header height=header-box
  var headerHeight = $('.header-container').height();
  var clearHeight = $('.clear-header-box');
  clearHeight.height(headerHeight);



  //arrow-top
  var top_show = 150;
  var delay = 1000;
  $(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > top_show) $('.arrow-top').fadeIn();
      else $('.arrow-top').fadeOut();
    });
    $('.arrow-top').click(function() {
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });

  //anchor menu-click scroll
  $('a[href^="#"]').click(function() {
    var el = $(this).attr('href');
    $('body').animate({
      scrollTop: $(el).offset().top - headerHeight
    }, 1000);
    return false;
  });





  $(window).resize(function() {
    if ($(window).width() >= '995') {
      $('.contact-box').outerHeight(283);
    } else {
      var h_box = $('.feedback-box').height();
      $('.contact-box').height(h_box);
    }

  });



});
