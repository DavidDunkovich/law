$(document).ready(function(){
  var scrollTop = 0;

  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
    
    if (scrollTop >= 100) {
      $('#global-nav').removeClass('visibility-hidden');
      $('#nav-logo').addClass('visibility-visible');

      $("#header-chevron").removeClass("animated bounce"); 

      $('#global-nav').addClass('scrolled-nav');
      $('#global-nav').removeClass('not-scrolled-nav');

      // $('#global-nav').addClass('navbar-light');
      // $('#global-nav').removeClass('navbar-dark');
     
    } else if (scrollTop < 100) {
      $("#header-chevron").addClass("animated bounce"); 

       $('#nav-logo').removeClass('visibility-visible');
       $('#nav-logo').addClass('visibility-hidden');

       $('#global-nav').addClass('not-scrolled-nav');
       $('#global-nav').removeClass('scrolled-nav');

      //  $('#global-nav').addClass('navbar-dark');
      // $('#global-nav').removeClass('navbar-light');
    }  
  });  
});