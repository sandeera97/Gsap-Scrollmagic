const flightPath = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        { x:200, y:200 },
        { x:350, y:-100 },
        { x: 450, y: -50 },
        { x:500, y: 0 },
        { x:450, y:50},
        { x:300, y: 100},
        { x:450, y: 300},
        { x: 550, y: -200},
        { x: 700, y: -150},
        { x: window.innerWidth, y: -250 }
    ]
}

const tween = new TimelineLite();

tween.add(
    TweenLite.to(".car",1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: '.animation',
    duration: 3000,
    triggerHook: 0
})
.setTween(tween)
.addIndicators()
.setPin(".animation")
.addTo(controller);