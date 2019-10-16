// 'use strict';
//
// function getCoords(elem) {
//     let coords = elem.getBoundingClientRect();
//
//     return {
//         top: coords.top,
//         bottom: coords.bottom ,
//         // top: coords.top + pageYOffset,
//         // bottom: coords.bottom + pageYOffset,
//     };
// }
//
// function isVisible(elem) {
//     let coords = elem.getBoundingClientRect();
//
//
//     let windowHeight = document.documentElement.clientHeight;
//
//     // видны верхний ИЛИ нижний край элемента
//     let topVisible = coords.top > 0 && coords.top < windowHeight;
//     // let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
//
//     return topVisible;
//     // return topVisible || bottomVisible;
// }
//
// function cross(elem) {
//     // const bcgImage = document.querySelector('.bcg-image');
//     const name = elem.dataset.name;
//     // console.log(name);
//     const rightBlock = document.querySelector(`.${name}`);
//     const rightBlockBottom = rightBlock.getBoundingClientRect().bottom;
//
//     const fixed = document.querySelector('.subtitle_fixed');
//     const fixedBottom = fixed.getBoundingClientRect().bottom;
//
//     const elemTop = elem.getBoundingClientRect().top;
//
//
//     // if (isVisible(elem)) {
//     //     if (coordsTop <= fixedBottom && coordsTop >= fixedTop) {
//     //         bcgImage.classList.remove('invisible');
//     //     } else {
//     //         bcgImage.classList.add('invisible');
//     //     }
//     // }
//
//     // console.log(coordsTop, fixedBottom, rightBlockBottom);
//     // console.log(elem);
//     // console.log(rightBlock, rightBlockBottom);
//
//
//         if (elemTop <= fixedBottom + 20 && fixedBottom <= rightBlockBottom) {
//             console.log('yes');
//         } else if (fixedBottom + 100 >= rightBlockBottom) {
//             console.log('no');
//         }
// }
//
//
// function getElem() {
//     const elems = document.querySelectorAll('.subtitle_scroll');
//
//     const fixed = document.querySelector('.subtitle_fixed');
//
//
//     const sound = document.querySelector('.right-block__sound_items-six');
//     // console.log(fixed.getBoundingClientRect().bottom, sound.getBoundingClientRect().bottom);
//
//     // for (let elem of elems) {
//     //     if (!elem.classList.contains('fixed'))  {
//     //         if (isVisible(elem)) {
//     //             console.log(elem, isVisible(elem));
//     //             cross(elem);
//     //         }
//     //     }
//     // }
// }
//
// // window.addEventListener('scroll', getElem);
//
//
//
