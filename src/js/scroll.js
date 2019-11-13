(function ($) {
    $(function () {

        // Плавная прокрутка
        $('.anchor').on('click', e => {
            e.preventDefault();

            const link = $(e.target).attr('href');

            let top = $(link).offset().top;
            $('body, html').animate({scrollTop: top}, 1000);
        })
    })
})(jQuery);
