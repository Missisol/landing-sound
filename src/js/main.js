'use strict';

function isVisible(elem) {
    let coords = elem.getBoundingClientRect();

    let windowHeight = document.documentElement.clientHeight;

    return  coords.top > 0 && coords.top < windowHeight;

    // return topVisible;
}

function cross(elem) {
    const bcgImage = document.querySelector('.bcg-image');

    const fixed = document.querySelector('.subtitle_fixed');
    const fixedBottom = fixed.getBoundingClientRect().bottom;
    const fixedTop = fixed.getBoundingClientRect().top;

    const elemTop = elem.getBoundingClientRect().top;
    const elemBottom = elem.getBoundingClientRect().bottom;

        if (elemTop <= fixedBottom && elemBottom >= fixedTop) {
            bcgImage.classList.remove('invisible');
            elem.classList.add('invisible');
        } else {
            bcgImage.classList.add('invisible');
            elem.classList.remove('invisible');
        }
}



function getElem() {
    const elems = document.querySelectorAll('.subtitle_scroll');

    for (let elem of elems) {
            if (isVisible(elem)) {
                cross(elem);
            }
        }
}

window.addEventListener('scroll', getElem);



