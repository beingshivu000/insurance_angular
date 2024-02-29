
$(document).ready(function () {
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $("header").addClass("darkHeader");
    } else {
        $("header").removeClass("darkHeader");
    }


   // // 1.jquery counter
  $(".counter").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 5000,
          easing: "swing",
          step: function (now) {
            now = Number(Math.ceil(now)).toLocaleString('en');
            $(this).text(now);
          },
        }
      );
  });   
});

  $('#service .slick_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    lazyLoad: 'ondemand',
    speed: 300,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          centerMode: true,
          slidesToShow: 1
        }
      }
      
    ]
  });

    $('#blogs .slick_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    lazyLoad: 'ondemand',
    speed: 300,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    // rtl: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2 
        }
      },
      {
        breakpoint: 576,
        settings: {
          centerMode: true,
          slidesToShow: 1
        }
      }
      
    ]
  });

  $('.testimonial_slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
    speed: 300,
    dots: true ,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 1
        }
      }
      
    ]
  });

  
  $('.client_slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
    speed: 300,
    dots: false ,
    arrows:  true,
    // autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 767 ,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2
        }
      }
      
    ]
  });
  $('#features').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
    speed: 300,
    dots: false ,
    arrows:  false,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 984,
        settings: {
          slidesToShow:3
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,  
          centerMode:true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode:true
        }
      }
      
    ]
  });


});


