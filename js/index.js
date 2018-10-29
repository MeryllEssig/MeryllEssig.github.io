// $(".button-collapse").sideNav();
//   $(document).ready(function(){
//       $('.scrollspy').scrollSpy();
//       $('ul.tabs').tabs();
//     });
//   $(window).scroll(function() {
//     if ($(".navbar").offset().top > 50) {
//           $(".custom").addClass("custom2");
//       } else {
//           $(".custom").removeClass("custom2");
//       }
//   })
//   $(document).ready(function(){
//       // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
//       $('.modal-trigger').modal();
//     });

$(function(){

    window.sr = ScrollReveal();
  
    if ($(window).width() < 768) {
  
        if ($('.timeline-content').hasClass('js--fadeInLeft')) {
            $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
        }
  
        sr.reveal('.js--fadeInRight', {
          origin: 'right',
          distance: '300px',
          easing: 'ease-in-out',
          duration: 800,
        });
  
    } else {
        
        sr.reveal('.js--fadeInLeft', {
          origin: 'left',
          distance: '300px',
            easing: 'ease-in-out',
          duration: 800,
        });
  
        sr.reveal('.js--fadeInRight', {
          origin: 'right',
          distance: '300px',
          easing: 'ease-in-out',
          duration: 800,
        });
  
    }
    
    sr.reveal('.js--fadeInLeft', {
          origin: 'left',
          distance: '300px',
            easing: 'ease-in-out',
          duration: 800,
        });
  
        sr.reveal('.js--fadeInRight', {
          origin: 'right',
          distance: '300px',
          easing: 'ease-in-out',
          duration: 800,
        });
  
  
  });
  