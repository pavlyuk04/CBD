window.onload = () => {
    $(document).ready(function(){
        $('.products__item').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: $('.left-prod-arrow'),
            nextArrow: $('.right-prod-arrow'), 
        });
    });
    $(document).ready(function(){
        $('.accardeon__header').click(function(){
            $('.accardeon__body').not($(this).next()).slideUp(200);
            $(this).next().slideToggle(200);
        })
    })
}