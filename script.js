// Reveal sections when scrolling

const sections = document.querySelectorAll("section");

const reveal = () => {

    sections.forEach(section => {

        const position = section.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {

            section.classList.add("show");

        }

    });

};


window.addEventListener("scroll", reveal);

reveal();window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    const hero = document.querySelector(".hero-content");

    hero.style.transform =
    `translateY(${scroll * 0.3}px)`;

});