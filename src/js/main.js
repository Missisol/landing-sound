'use strict';

function getCoords(elem) {
    let coords = elem.getBoundingClientRect();

    return {
        top: coords.top,
        bottom: coords.bottom ,
        // top: coords.top + pageYOffset,
        // bottom: coords.bottom + pageYOffset,
    };
}

function isVisible(elem) {
    let coords = elem.getBoundingClientRect();

    let windowHeight = document.documentElement.clientHeight;

    // видны верхний ИЛИ нижний край элемента
    let topVisible = coords.top > 0 && coords.top < windowHeight;
    // let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

    return topVisible;
    // return topVisible || bottomVisible;
}

function cross(elem) {
    const bcgImage = document.querySelector('.bcg-image');

    const fixed = document.querySelector('.subtitle_fixed');
    const fixedBottom = fixed.getBoundingClientRect().bottom;
    const fixedTop = fixed.getBoundingClientRect().top;

    const elemTop = elem.getBoundingClientRect().top;
    const elemBottom = elem.getBoundingClientRect().bottom;


    if (isVisible(elem)) {
        if (elemTop <= fixedBottom && elemBottom >= fixedTop) {
            bcgImage.classList.remove('invisible');
            elem.classList.add('invisible');
        } else {
            bcgImage.classList.add('invisible');
            elem.classList.remove('invisible');
        }
    }
}

function getElem() {
    const elems = document.querySelectorAll('.subtitle_scroll');

    const fixed = document.querySelector('.subtitle_fixed');


    for (let elem of elems) {
        if (!elem.classList.contains('fixed'))  {
            if (isVisible(elem)) {
                console.log(elem, isVisible(elem));
                cross(elem);
            }
        }
    }
}

window.addEventListener('scroll', getElem);



