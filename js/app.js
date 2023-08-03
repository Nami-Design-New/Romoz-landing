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
//accordion show hide
let btn = document.querySelector(".showbtn");
let acc = document.querySelector("#accordionExample");
btn.addEventListener("click", () => {
  acc.classList.toggle("show");
  if (acc.classList.contains("show")) {
    btn.innerHTML = `عرض اقل <i class="fa-sharp fa-solid fa-chevron-up"></i>`;
  } else {
    btn.innerHTML = `عرض المزيد <i class="fa-sharp fa-solid fa-chevron-down"></i>`;
  }
});
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
