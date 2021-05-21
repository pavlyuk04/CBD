window.onload = () => {
    $(document).ready(function(){
        $('.products__item').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: $('.left-prod-arrow'),
            nextArrow: $('.right-prod-arrow'), 
            responsive: [
                {
                  breakpoint: 980,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                  }
                },
                {
                breakpoint: 560,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                }
              },]
        });
    });

    // Акардеон
    $(document).ready(function(){
        $('.accardeon__header').click(function(){
            $('.accardeon__body').not($(this).next()).slideUp(200)
            $(this).next().slideToggle(200)
        })
    })
    // Табы
    $(document).ready(function(){
        $('.info__nav__tab').click(function(){
            $(this).addClass('active').siblings().removeClass('active')
            $(this).closest('.what-we-are__body__info').find('.tabs__item').removeClass('active').eq($(this).index()).addClass('active')
        }); 

    })

    $(document).ready(function(){
        $('a[href^="#"]').click(function (event) {
            event.preventDefault();
            let atr  = $(this).attr('href'),
                position = $(atr).offset().top;
            $('body,html').animate({scrollTop: position}, 1300);
        });
    });

    $(document).ready(function(){
        $('.reviews__body__slide').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: $('.left-white-arrow'),
            nextArrow: $('.right-white-arrow'), 
        });
    });

    $(document).ready(function() {
        $(".menu__burger").click(function() {
         $(this).toggleClass("active")
          $('.menu__nav').slideToggle(300, function(){
            if($(this).css('display') === "none"){
              $(this).removeAttr('style');
            }
          })
        })
    })
   
}