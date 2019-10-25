'use strict';

$(document).ready(function () {

    new $.Zebra_Pin($('#sub-fixed'), {
        hard: true
    });

    const pin1 = new $.Zebra_Pin($('#pin1'), {
        top_spacing: 467,
        contain: true
    });

});