
window.onload = () => {
    $('.spiner').fadeOut()
    
    $(document).ready(function(){
        $('.log, .menu__login').click(function(event){
            event.preventDefault
            $('.login').slideToggle(100, function(){
                if($(this).css('display')=== 'block'){
                    $('section').addClass('blur')
                } else if ($(this).css('display')=== 'none'){
                    $('section').removeClass('blur')
                }
            })
        })
    })

    $(document).ready(function(){
        $('.tabs__text').click(function(){
            $(this).addClass('active').siblings().removeClass('active')
            $('.login__body__forms').removeClass('active-forms').eq($(this).index()).addClass('active-forms')
        })
    })

    $(document).ready(function(event){
        event.preventDefault
        $('.copyright__register').click(function(){
            $('.tabs__text:eq(0)').removeClass('active').siblings().addClass('active')
            $('.login__body__forms').removeClass('active-forms').eq($(this).index()).addClass('active-forms')
        })
    })

    $(document).ready(function(){
        $('.close').click(function(event){
            event.preventDefault
            $('.login').slideUp(100)
            $('section').removeClass('blur')
        })
    })
    $(document).ready(function(){
        $('section').mouseup(function(){
            $('.login').css('display','none')
            $('section').removeClass('blur')
        })
    })


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


    $(document).ready(function(){
        $('.accardeon__header').click(function(){
            $(this).find('.rotate').toggleClass('active')
            $('.accardeon__body').not($(this).next()).slideUp(200)
            $(this).next().slideToggle(200)
        })
    })
 
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