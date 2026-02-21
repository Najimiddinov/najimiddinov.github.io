const texts = {
  en: "Robotics & Software Engineer",
  uz: "Robototexnika va Dasturiy Ta’minot Muhandisi",
  ru: "Инженер по робототехнике и разработке ПО"
};

let currentLang = "en";
let index = 0;

function typeEffect() {
  const element = document.getElementById("typing");
  const text = texts[currentLang];
  element.innerHTML = text.substring(0, index);
  index++;
  if (index > text.length) index = 0;
}

setInterval(typeEffect, 100);

function setLang(lang) {
  currentLang = lang;
  index = 0;
}

particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    color: { value: "#00F0FF" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: { enable: true, speed: 2 }
  }
});