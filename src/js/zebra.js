'use strict';

$(document).ready(function () {

    new $.Zebra_Pin($('#sub-fixed'), {
        hard: true
    });

    if (document.documentElement.clientWidth >= 1400) {

        new $.Zebra_Pin($('#pin1'), {
            top_spacing: 527,
            contain: true
        });

        new $.Zebra_Pin($('#pin2'), {
            top_spacing: 527,
            contain: true
        });
        new $.Zebra_Pin($('#pin4'), {
            top_spacing: 527,
            contain: true
        });

        new $.Zebra_Pin($('#pin5'), {
            top_spacing: 527,
            contain: true
        });

        new $.Zebra_Pin($('#pin6'), {
            top_spacing: 527,
        });

        new $.Zebra_Pin($('#pin7'), {
            top_spacing: 377,
        });
    } else if (document.documentElement.clientWidth < 1400 && document.documentElement.clientWidth > 1024) {
        window.addEventListener('orientationchange', function () {
            location.reload();
        });

        new $.Zebra_Pin($('#pin1'), {
            top_spacing: 150,
            contain: true
        });

        new $.Zebra_Pin($('#pin2'), {
            top_spacing: 150,
            contain: true
        });

        new $.Zebra_Pin($('#pin4'), {
            top_spacing: 150,
            contain: true
        });

        new $.Zebra_Pin($('#pin5'), {
            top_spacing: 150,
            contain: true
        });

        new $.Zebra_Pin($('#pin6'), {
            top_spacing: 150,
        });

        new $.Zebra_Pin($('#pin7'), {
            top_spacing: 150,
        });
    } else if (document.documentElement.clientWidth < 1024) {
        window.addEventListener('orientationchange', function () {
            location.reload();
        });

        new $.Zebra_Pin($('#pin1'), {
            top_spacing: 132,
            contain: true
        });

        new $.Zebra_Pin($('#pin2'), {
            top_spacing: 132,
            contain: true
        });

        new $.Zebra_Pin($('#pin4'), {
            top_spacing: 132,
            contain: true
        });

        new $.Zebra_Pin($('#pin5'), {
            top_spacing: 132,
            contain: true
        });

        new $.Zebra_Pin($('#pin6'), {
            top_spacing: 132,
        });

        new $.Zebra_Pin($('#pin7'), {
            top_spacing: 132,
        });
    }
});


