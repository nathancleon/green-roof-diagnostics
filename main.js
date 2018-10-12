$( document ).ready(function() {
  stickyNav();
  showRotationalContent();
});

function stickyNav() {
  var isVisible = false;
  $(window).scroll(function(){
       var shouldBeVisible = $(window).scrollTop()>765;
       if (shouldBeVisible && !isVisible) {
            isVisible = true;
            $('.nav').removeClass('sticky');
            $('.nav').show();
       } else if (isVisible && !shouldBeVisible) {
            isVisible = false;
            $('.nav').hide();
      }
  });
}

function showRotationalContent() {
  var isVisible = false;
  $(window).scroll(function(){
       var shouldBeVisible = $(window).scrollTop()>250;
       if (shouldBeVisible && !isVisible) {
            isVisible = true;
            $('.new-content').css('display', 'flex').hide().fadeIn(1000);
       }
      });
  };