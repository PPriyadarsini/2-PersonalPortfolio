$(document).ready(function () {
        $(window).scroll(function () {
            // sticky navbar on scroll script
            if (this.scrollY > 20) {
                $('.navbar').addClass("sticky");
            } else {
                $('.navbar').removeClass("sticky");
            }
        });
})

const sr = ScrollReveal({
    origin:'top',
    distance:'80px',
    duration:2000,
    reset: true
})

sr.reveal('.home',)

sr.reveal('.about-content',{delay: 300})
sr.reveal('.skills-content',{delay: 300})
sr.reveal('.work-container',{delay: 300})
sr.reveal('.fields',{delay:200})
sr.reveal('.field',{delay: 300})
sr.reveal('.button',{delay:400})


var typed = new Typed(".typing",{
    strings: ["Web Developer", "Illustrator", "UI/UX Designer"],
    typeSpeed: 90,
    backSpeed: 30,
    loop: true
});
    
