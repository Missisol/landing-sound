'use strict';

$(document).ready(function () {

    const titles = document.querySelectorAll('.big-text');

    titles.forEach(title => {
        $(title).mousemove(function (e) {
            const wrap = $(e.target).closest('div.big-text__wrap');
            const image = $(wrap).find('.big-text__image-wrap');
            if (image && $(image).css('display') !== 'none') {

                let elLeftPosition = wrap.position().left;
                $(image).css({left: e.clientX - elLeftPosition - 570, top: 10});
            }
        });
    })
});


