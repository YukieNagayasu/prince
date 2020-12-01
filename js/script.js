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

$('.burger-btn').on('click',function(){
  $('.burger-btn').toggleClass('close');
  $('.hamburger-wrapper').fadeToggle(500);
});

$('.nav-item').hover(function(){
  $("ul:not(:animated)", this).slideDown();
}, function(){
  $("ul.dropdwn_menu", this).slideUp();
});