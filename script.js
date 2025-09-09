// سوئیچ حالت شب/روز
document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// افکت ورود بخش‌ها هنگام اسکرول
const revealElements = document.querySelectorAll(".article, .form-section, .comment-section");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// افکت دکمه‌ها هنگام کلیک
const buttons = document.querySelectorAll(".btn");
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.add("clicked");
    setTimeout(() => btn.classList.remove("clicked"), 300);
  });
});
