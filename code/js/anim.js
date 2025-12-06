// Simple scroll animation for fade-in
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      sec.style.opacity = 1;
      sec.style.transform = 'translateY(0)';
    }
  });
});

// Initial setup
document.querySelectorAll('section').forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = 'translateY(30px)';
});
