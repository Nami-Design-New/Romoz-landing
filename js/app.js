// navigation header
let bar = document.querySelector(".navigationbar");
window.addEventListener("scroll", () => {
  this.scrollY === 0
    ? bar.classList.remove("scrolled")
    : bar.classList.add("scrolled");
});
//parteners slider
let swiper = new Swiper(".mySwiper", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    992: {
      slidesPerView: 5
    },
    768: {
      slidesPerView: 3
    },
    350: {
      slidesPerView: 2
    }
  }
});
// nav-links-highlight
let navLinks = document.querySelectorAll(".nav-link");
let sections = document.querySelectorAll(".sec");
let current;
window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    let secTop = sec.offsetTop;
    if (pageYOffset >= secTop - 110) {
      current = sec.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.classList.contains(current)) {
      link.classList.add("active");
    }
  });
});
