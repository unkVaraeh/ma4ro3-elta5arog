const slides = document.querySelector(
  "body > div.content > div.slide-show > div.hotels"
);
const slide = document.querySelectorAll(
  "body > div.content > div.slide-show > div.hotels > div.hotel"
);
const prev = document.querySelector("#prev1");
const next = document.querySelector("#next1");
let index = 0;
let autoSlideInterval;

function showSlide(idx) {
  const offset = (-idx * 100) / 3; // Adjust offset for three slides
  slides.style.transform = `translateX(${offset}%)`;
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    if (index < slide.length - 3) {
      // Show three slides at once
      index++;
    } else {
      index = 0;
      slides.style.transition = "none"; // Disable animation temporarily
      slides.style.transform = "translateX(0%)";
      setTimeout(() => {
        slides.style.transition = "transform 0.5s ease-in-out"; // Re-enable animation
      });
      return;
    }
    showSlide(index);
  }, 3000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

prev.addEventListener("click", () => {
  index = index > 0 ? index - 1 : slide.length - 3;
  showSlide(index);
});

next.addEventListener("click", () => {
  index = index < slide.length - 3 ? index + 1 : 0;
  showSlide(index);
});
const ss=document.querySelectorAll("body > div.content > div.slide-show > div.hotels > div.hotel > img");
ss.forEach((img) => {
    img.addEventListener("mouseenter", stopAutoSlide);
    img.addEventListener("mouseleave", startAutoSlide);
  });
  
  
  startAutoSlide();


  // start slide2


  const slides2 = document.querySelector(
    "body > div.content > div.slide-show > div.restorants"
  );

  const slide2 = document.querySelectorAll(
    "body > div.content > div.slide-show > div.restorants > div.restorant"
  );

const prev2 = document.querySelector("#prev2");

const next2 = document.querySelector("#next2");

let index2 = 0;

let autoSlideInterval2;

function showSlide2(idx) {
  const offset = (-idx * 100) / 3; // Adjust offset for three slides
  slides2.style.transform = `translateX(${offset}%)`;
}

function startAutoSlide2() {
  autoSlideInterval2 = setInterval(() => {
    if (index2 < slide2.length - 3) {
      // Show three slides at once
      index2++;
    } else {
      index2 = 0;
      slides2.style.transition = "none"; // Disable animation temporarily
      slides2.style.transform = "translateX(0%)";
      setTimeout(() => {
        slides2.style.transition = "transform 0.5s ease-in-out"; // Re-enable animation
      });
      return;
    }
    showSlide2(index2);
  }, 3000);
}

function stopAutoSlide2() {
  clearInterval(autoSlideInterval2);
}

prev2.addEventListener("click", () => {
  index = index2 > 0 ? index2 - 1 : slide2.length - 3;
  showSlide2(index2);
});

next2.addEventListener("click", () => {
  index2 = index2 < slide2.length - 3 ? index2 + 1 : 0;
  showSlide2(index);
});

const ss2=document.querySelectorAll("body > div.content > div.slide-show > div.restorants > div.restorant > img");
ss2.forEach((img) => {
    img.addEventListener("mouseenter", stopAutoSlide);
    img.addEventListener("mouseleave", startAutoSlide);
  });

  startAutoSlide2();
