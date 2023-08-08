// navigation header
let bar = document.querySelector(".navigationbar");
window.addEventListener("scroll", () => {
  this.scrollY === 0
    ? bar.classList.remove("scrolled")
    : bar.classList.add("scrolled");
});
//parteners slider
let swiper = new Swiper(".partenersSwiper", {
  spaceBetween: 50,
  grabCursor: true,
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  breakpoints: {
    992: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 2
    },
    350: {
      slidesPerView: 1
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
// animate counting
let numbers = document.querySelectorAll(".num");
let started = false;
function startCount(element) {
  let goal = element.dataset.goal;
  let count = setInterval(() => {
    element.textContent++;
    if (element.textContent == goal) {
      clearInterval(count);
    }
  }, 3000 / goal);
}
window.onscroll = function() {
  if (this.scrollY >= document.querySelector(".parteners").offsetTop - 200) {
    if (!started) {
      numbers.forEach(num => startCount(num));
    }
    started = true;
  }
};

//nav toggler
let toggler = document.querySelector("#toggle");
toggler.addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
  if (document.querySelector(".nav-links").classList.contains("active")) {
    toggler.querySelector("i").classList =
      "fa-sharp fa-solid fa-bars-staggered";
  } else {
    toggler.querySelector("i").classList = "fa-sharp fa-solid fa-bars";
  }
});
let links = document.querySelectorAll(".nav-link");
links.forEach(l => {
  l.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.remove("active");
  });
});
//testmonials slider
var swiperX = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    992: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 2
    },
    350: {
      slidesPerView: 1
    }
  }
});
