const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});

gsap.from(".upper .right a",{
    opacity:0,
    y: 40,
    delay:.2,
    stagger:0.2
})