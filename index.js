const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const dakProducts = [
    "Solar Panels",
    "Inverter Systems",
    "Lithium Batteries",
    "Solar Street Lights",
    "Home Solar Kits",
    "Industrial Solar Solutions",
];
const faqQuestions = document.querySelectorAll(".faq-question");

function toggleMenu() {
    const menu = document.getElementById("navMenu");
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}

let current = 0;

function updateSlides() {
    slides.forEach(slide => {
        slide.classList.remove("active", "prev-slide", "next-slide");
    });

    slides[current].classList.add("active");

    let prev = (current - 1 + slides.length) % slides.length;
    let next = (current + 1) % slides.length;

    slides[prev].classList.add("prev-slide");
    slides[next].classList.add("next-slide");
}

nextBtn.addEventListener("click", () => {
    current = (current + 1) % slides.length;
    updateSlides();
});

prevBtn.addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    updateSlides();
});

setInterval(() => {
    current = (current + 1) % slides.length;
    updateSlides();
}, 3000);

updateSlides();

prevBtn.addEventListener("click", () => {
    current--;
    if (current < 0) {
        current = slides.length - 1;
    }
    showSlide(current);
});

setInterval(() => {
    current++;
    if (current >= slides.length) {
        current = 0;
    }
    showSlide(current);
}, 5000);

faqQuestions.forEach(question => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;

        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});



