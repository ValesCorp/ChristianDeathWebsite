$(document).ready(function() {
    const $slider = $('.image-slider');
    const slideWidth = 315; // min-width (300px) + gap (15px)

    $('.prev').click(function() {
        $slider.animate({
            scrollLeft: $slider.scrollLeft() - slideWidth
        }, 300);
    });

    $('.next').click(function() {
        $slider.animate({
            scrollLeft: $slider.scrollLeft() + slideWidth
        }, 300);
    });

    $('#vista-cuadricula').click(function () {
        if ($('#contenedor-productos').hasClass('vista-carrete')) {
            $('#contenedor-productos').removeClass('vista-carrete');
            $('#contenedor-productos').addClass('vista-cuadricula');
            $("#span-mostrar-mas").text("keyboard_arrow_down");
        } else if ($('#contenedor-productos').hasClass('vista-cuadricula')) {
            $('#contenedor-productos').removeClass('vista-cuadricula');
            $('#contenedor-productos').addClass('vista-carrete');
            $("#span-mostrar-mas").text("chevron_right");
        }
    });
});
