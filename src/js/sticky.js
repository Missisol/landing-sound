var controller = new ScrollMagic.Controller();

$(function () { // wait for document ready
    // build scene
    var scene1 = new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        duration: 500,
        offset: -30
        // offset: 100
    })
        .setPin("#pin1")
        // .addIndicators({name: "1 (duration: 500)"}) // add indicators (requires plugin)
        .addTo(controller);

    var scene2 = new ScrollMagic.Scene({
        triggerElement: "#trigger2",
        duration: 2000,
        offset: 995
        // offset: 1125
    })
        .setPin("#pin2")
        // .addIndicators({name: "2 (duration: 2000)"}) // add indicators (requires plugin)
        .addTo(controller);

    var scene3 = new ScrollMagic.Scene({
        triggerElement: "#trigger3",
        duration: 300,
        offset: 420
        // offset: 550
    })
        .setPin("#pin3")
        // .addIndicators({name: "3 (duration: 300)"}) // add indicators (requires plugin)
        .addTo(controller);

    var scene4 = new ScrollMagic.Scene({
        triggerElement: "#trigger4",
        duration: 300,
        offset: 805
        // offset: 935
    })
        .setPin("#pin4")
        // .addIndicators({name: "4 (duration: 300)"}) // add indicators (requires plugin)
        .addTo(controller);

    var scene5 = new ScrollMagic.Scene({
        triggerElement: "#trigger5",
        duration: 500,
        offset: 665,
        // offset: 795
    })
        .setPin("#pin5")
        // .addIndicators({name: "5 (duration: )"}) // add indicators (requires plugin)
        .addTo(controller);

    var scene6 = new ScrollMagic.Scene({
        triggerElement: "#trigger6",
        // offset: 450,
        // offset: 795
    })
        .setPin("#pin6")
        // .addIndicators({name: "6 (duration: )"}) // add indicators (requires plugin)
        .addTo(controller);
});