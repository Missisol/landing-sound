var controller = new ScrollMagic.Controller();

$(function () { // wait for document ready
    // build scene
    var scene1 = new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        duration: 450,
        offset: -30
    })
        .setPin("#pin1")
        // .addIndicators({name: "1 (duration: 500)"}) // add indicators (requires plugin)
        .addTo(controller);

    var scene2 = new ScrollMagic.Scene({
        triggerElement: "#trigger2",
        duration: 2020,
        offset: 120
    })
        .setPin("#pin2")
        // .addIndicators({name: "2 (duration: 2000)"}) // add indicators (requires plugin)
        .addTo(controller);

    var scene3 = new ScrollMagic.Scene({
        triggerElement: "#trigger3",
        duration: 170,
        offset: -25,
    })
        .setPin("#pin3")
        // .addIndicators({name: "3 (duration: 300)"}) // add indicators (requires plugin)
        .addTo(controller);

    var scene4 = new ScrollMagic.Scene({
        triggerElement: "#trigger4",
        duration: 180,
        offset: -25
    })
        .setPin("#pin4")
        // .addIndicators({name: "4 (duration: 300)"}) // add indicators (requires plugin)
        .addTo(controller);

    var scene5 = new ScrollMagic.Scene({
        triggerElement: "#trigger5",
        duration: 520,
        offset: 320
    })
        .setPin("#pin5")
        // .addIndicators({name: "5 (duration: )"}) // add indicators (requires plugin)
        .addTo(controller);

    var scene6 = new ScrollMagic.Scene({
        triggerElement: "#pin6",
        offset: -30,
    })
        .setPin("#pin6")
        // .addIndicators({name: "6 (duration: )"}) // add indicators (requires plugin)
        .addTo(controller);

    var scene7 = new ScrollMagic.Scene({
        triggerElement: "#pin7",
        offset: -35,
    })
        .setPin("#pin7")
        // .addIndicators({name: "7 (duration: )"}) // add indicators (requires plugin)
        .addTo(controller);
});