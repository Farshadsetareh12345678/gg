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
