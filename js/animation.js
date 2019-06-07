document.addEventListener('DOMContentLoaded', () =>{
    // initial page animation
    anime.timeline({
        easing: 'easeOutExpo',
    })
    .add({
        targets: '.main-nav',
        width: ['0px', '1200px'],
    })
    .add({
        targets: '.main-nav a',
        opacity: [0,1],
        translateY: [20, 0],
        delay: (el, i) => 100 * i,
        offset: '-=500',
    })
    .add({
        targets: '.showcase',
        opacity: [0,1],
        translateX: [-100, 0],
        offset: '-=700',
    })
    .add({
        targets: '.top-box',
        opacity: [0,1],
        translateX: [100, 0],
        offset: '-=700',
    })
})