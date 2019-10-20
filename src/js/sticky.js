var controller = new ScrollMagic.Controller();

$(function () { // wait for document ready
    // build scene
    var scene1 = new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        duration: 520,
        offset: -30
    })
        .setPin("#pin1")
        // .addIndicators({name: "1"}) // add indicators (requires plugin)
        .addTo(controller);

    var scene11 = new ScrollMagic.Scene({
        triggerElement: "#trigger11",
        duration: 570,
        offset: 300
    })
        .setPin("#pin11")
        // .addIndicators({name: "11"}) // add indicators (requires plugin)
        .addTo(controller);

    var scene2 = new ScrollMagic.Scene({
        triggerElement: "#trigger2",
        duration: 2110,
        offset: 120
    })
        .setPin("#pin2")
        // .addIndicators({name: "2"}) // add indicators (requires plugin)
        .addTo(controller);

    var scene22 = new ScrollMagic.Scene({
        triggerElement: "#trigger22",
        duration: 1380,
        offset: -8
    })
        .setPin("#pin22")
        // .addIndicators({name: "22"}) // add indicators (requires plugin)
        .addTo(controller);

    var scene3 = new ScrollMagic.Scene({
        triggerElement: "#trigger3",
        duration: 170,
        offset: -25,
    })
        .setPin("#pin3")
        // .addIndicators({name: "3"}) // add indicators (requires plugin)
        .addTo(controller);

    var scene33 = new ScrollMagic.Scene({
        triggerElement: "#trigger33",
        duration: 200,
        offset: -10,
    })
        .setPin("#pin33")
        // .addIndicators({name: "33"}) // add indicators (requires plugin)
        .addTo(controller);

    var scene4 = new ScrollMagic.Scene({
        triggerElement: "#trigger4",
        duration: 180,
        offset: -25
    })
        .setPin("#pin4")
        // .addIndicators({name: "4"}) // add indicators (requires plugin)
        .addTo(controller);

    var scene44 = new ScrollMagic.Scene({
        triggerElement: "#trigger44",
        duration: 300,
        offset: -5
    })
        .setPin("#pin44")
        // .addIndicators({name: "44"}) // add indicators (requires plugin)
        .addTo(controller);

    var scene5 = new ScrollMagic.Scene({
        triggerElement: "#trigger5",
        duration: 520,
        offset: 320
    })
        .setPin("#pin5")
        // .addIndicators({name: "5"}) // add indicators (requires plugin)
        .addTo(controller);

    var scene55 = new ScrollMagic.Scene({
        triggerElement: "#trigger55",
        duration: 720,
        offset: 10
    })
        .setPin("#pin55")
        // .addIndicators({name: "55"}) // add indicators (requires plugin)
        .addTo(controller);

    var scene6 = new ScrollMagic.Scene({
        triggerElement: "#pin6",
        offset: -30,
    })
        .setPin("#pin6")
        // .addIndicators({name: "6"}) // add indicators (requires plugin)
        .addTo(controller);

    var scene66 = new ScrollMagic.Scene({
        triggerElement: "#pin66",
        offset: -5,
    })
        .setPin("#pin66")
        // .addIndicators({name: "66"}) // add indicators (requires plugin)
        .addTo(controller);

    var scene7 = new ScrollMagic.Scene({
        triggerElement: "#pin7",
        offset: -35,
    })
        .setPin("#pin7")
        // .addIndicators({name: "7 (duration: )"}) // add indicators (requires plugin)
        .addTo(controller);

    var scene77 = new ScrollMagic.Scene({
        triggerElement: "#pin77",
        offset: -15,
    })
        .setPin("#pin77")
        // .addIndicators({name: "7"}) // add indicators (requires plugin)
        .addTo(controller);
});