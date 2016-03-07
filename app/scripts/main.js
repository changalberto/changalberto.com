(function($) {
  'use strict';

  $('p.email').on('click', function() {
    window.location = 'mailto:me@changalberto.com';
  });

  $.scrollUp({
    scrollImg: 'true'
  });

  var sr = new ScrollReveal({
    reset: true
  });

  sr.reveal('h3.label', {
    duration: 300,
    delay: 550
  });

  sr.reveal('h1', {
    duration: 700,
    delay: 200
  });

  sr.reveal('blockquote', {
    duration: 500
  });

  sr.reveal('blockquote em', {
    duration: 300,
    delay: 200
  });

  sr.reveal('blockquote i', {
    duration: 300,
    delay: 300
  });

  sr.reveal('blockquote span', {
    duration: 300,
    delay: 400
  });

  sr.reveal('.panel', {
    duration: 500
  });

  sr.reveal('h4, h5', {
    duration: 300,
    delay: 200
  });

  sr.reveal('.avatar', {
    duration: 300,
    delay: 500
  });

  sr.reveal('address', {
    duration: 300,
    delay: 100
  });

  sr.reveal('time', {
    duration: 300,
    delay: 100
  });

  sr.reveal('.panel p', {
    duration: 300,
    delay: 100
  });

  sr.reveal('.panel li', {
    duration: 300,
    delay: 100
  });

  sr.reveal('footer', {
    duration: 500
  });

  sr.reveal('footer .email', {
    duration: 300,
    delay: 100
  });

  sr.reveal('footer .footer-links', {
    duration: 300,
    delay: 100
  });

  sr.reveal('.samurai', {
    duration: 600,
    delay: 500
  });

  var
    scrollPosition = 0,
    animation = {
      startPosition: 0,
      endPosition: 2000
    },
    color = {
      start: new $.Color('#de0000'),
      end: new $.Color('#fff')
    }
  ;

  $(document).scroll(function() {
    scrollPosition = $(this).scrollTop();
    if(scrollPosition >= animation.startPosition && scrollPosition <= animation.endPosition) {
      // console.log( 'scrolling and animating' );
      //we want to calculate the relevant transitional rgb value
      var percentScrolled = scrollPosition / (animation.endPosition - animation.startPosition);
      var newRed = color.start.red() + ((color.end.red() - color.start.red()) * percentScrolled);
      var newGreen = color.start.green() + ((color.end.green() - color.start.green()) * percentScrolled);
      var newBlue = color.start.blue() + ((color.end.blue() - color.start.blue()) * percentScrolled);
      var newColor = new $.Color(newRed, newGreen, newBlue);
      //console.log( newColor.red(), newColor.green(), newColor.blue() );
      $('h1 a').animate({
        color: newColor
      }, 0);
    } else if(scrollPosition > animation.endPosition) {
      $('h1 a').animate({
        color: color.end
      }, 0);
    } else if(scrollPosition < animation.startPosition) {
      $('h1 a').animate({
        color: color.start
      }, 0);
    } else {
      return;
    }
  });

})(jQuery);
