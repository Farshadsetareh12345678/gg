// حالت شب/روز
const toggleBtn = document.getElementById('theme-toggle');
if(toggleBtn){
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
  });
}

// پس‌زمینه متحرک
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('Particles loaded');
});

// انیمیشن اسکرول
AOS.init({ duration: 1000 });

// تایپ متن خوش‌آمدگویی
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
