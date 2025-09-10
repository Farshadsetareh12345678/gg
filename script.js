// حالت شب/روز
const toggleBtn = document.getElementById('theme-toggle');
if(toggleBtn){
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    toggleBtn.textContent = document.body.classList.contains('light') ? '🌙' : '☀️';
  });
}

// تغییر رنگ هدر هنگام اسکرول
window.addEventListener('scroll', () => {
  document.querySelector('.header').classList.toggle('scrolled', window.scrollY > 50);
});

// پس‌زمینه متحرک
particlesJS('particles-js', {
  particles: {
    number: { value: 100 },
    color: { value: "#3b82f6" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: { enable: true, distance: 150, color: "#3b82f6", opacity: 0.4, width: 1 },
    move: { enable: true, speed: 2 }
  }
});

// انیمیشن تایپ متن
const text = "به سایت قوام خوش آمدید";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typed-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// GSAP انیمیشن ورود کارت‌ها
gsap.from(".card", {opacity:0, y:50, duration:1, stagger:0.2});
