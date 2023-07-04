//$=========== A.O.S Library ===========//
AOS.init();
//$=========== Swiper.js Library ===========//
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
//--------------------------------
var swiper1 = new Swiper(".mySwiper-1", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//--------------------------------
var swiper2 = new Swiper(".mySwiper-2", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//$=========== Main JS ===========//
//#=========== Get Elements ===========//
let navBarBtn = document.getElementById("fa-bars");
let navBarMenue = document.querySelector("header nav ul");
let navBarCloseBtn = document.getElementById("fa-rectangle-xmark");
let navBarMenueItems = document.querySelectorAll("header nav ul li");
let departmentMenue = document.querySelectorAll(
  ".department .container .department-menue"
);
let departmentText = document.querySelectorAll(
  ".department .container .department-text"
);
console.log(departmentText);
//#=========== Events ===========//

navBarBtn.onclick = function (e) {
  navBarMenue.classList.add("active");
};

navBarCloseBtn.onclick = function (e) {
  navBarMenue.classList.remove("active");
};

navBarMenueItems.forEach((li) => {
  li.onclick = function (e) {
    navBarMenue.classList.remove("active");
  };
});

departmentMenue.forEach((el) => {
  el.onclick = function (e) {
    removeActiveDepartmentMenue();
    el.classList.add("active");
    removeActiveDepartmentText();
    departmentText.forEach((ele) => {
      ele.getAttribute("data-target");
      if (ele.getAttribute("data-target") === el.getAttribute("data-target")) {
        ele.classList.add("active");
      }
    });
  };
});

function removeActiveDepartmentMenue() {
  departmentMenue.forEach((el) => {
    el.classList.remove("active");
  });
}
function removeActiveDepartmentText() {
  departmentText.forEach((el) => {
    el.classList.remove("active");
  });
}
//#===========
/*
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    const increment = target / 20000;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
*/
//#=========== Counter Increament ===========//
let sw = 0;
let nuberIncreaseSection = document.getElementById("targetSection");
window.onscroll = function () {
  if (window.scrollY > nuberIncreaseSection.offsetTop - 500 && sw === 0) {
    //*
    const counters = document.querySelectorAll(".counter");

    counters.forEach((counter) => {
      counter.innerText = "0";

      const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const c = +counter.innerText;

        const increment = target / 200000;

        if (c < target) {
          counter.innerText = `${Math.ceil(c + increment)}`;
          setTimeout(updateCounter, 1);
        } else {
          counter.innerText = target;
        }
      };

      updateCounter();
    });
    sw = 1;
    //*
  }
};
