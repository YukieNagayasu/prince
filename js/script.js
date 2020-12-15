$('#slider').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  infinite: true,
  fade: true,
  cssEase: 'linear'
  
});

$('#slider_sp').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  infinite: true,
  fade: true,
  cssEase: 'linear'  
});

// hamburger menu
$(function () {
  let state = false;
  $('.burger-btn').click(function () {
    $('.burger-btn').toggleClass('close');
    $('.hamburger-wrapper').fadeToggle(500);
    
    if (state == false) {
      $('body').css('overflow', 'hidden');
      state = true;
    } else {
      $('body').css('overflow', 'auto');
      state = false;
    }
  });
});

$('.nav-item').hover(function(){
  $("ul:not(:animated)", this).slideDown();
}, function(){
  $("ul.dropdwn_menu", this).slideUp();
});

// scroll event for paragraph
$(function(){
  $(window).scroll(function (){
    $('.effect-fade').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight  + 100){
        $(this).addClass('effect-scroll');
      } else {
        $(this).removeClass('effect-scroll');
      }
    });
  });
});

// scroll event for image
(function() {
  const image = document.querySelectorAll('.img-wrap');
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('img-animation');
      } else {
        entry.target.classList.remove('img-animation');
      }
    });
  });
  Array.prototype.forEach.call(image, function(img) {
    observer.observe(img);
  });
})();