// FAQ Toggle
document.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", function(){
        const answer = this.nextElementSibling;
        answer.style.display =
            answer.style.display === "block" ? "none" : "block";
    });
});

// Fade Animation on Scroll
const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
    const trigger = window.innerHeight * 0.85;

    faders.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if(top < trigger){
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});

// Initial fade style
faders.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.6s ease";
});