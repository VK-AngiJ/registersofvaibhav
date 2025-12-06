window.addEventListener('DOMContentLoaded', () => {
  const sections = [
    { id: 'about', file: 'modules/about.html' },
    { id: 'projects', file: 'modules/project-cards.html' },
    { id: 'contact', file: 'modules/contact.html' }
  ];

  sections.forEach(sec => {
    fetch(sec.file)
      .then(response => response.text())
      .then(html => {
        document.getElementById(sec.id).innerHTML = html;
      })
      .catch(err => console.error(`Failed to load ${sec.file}:`, err));
  });
});
