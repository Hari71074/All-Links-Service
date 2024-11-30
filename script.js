// Search functionality
document.getElementById('searchBar').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const sections = document.querySelectorAll('section');
  
    sections.forEach(section => {
      const text = section.textContent.toLowerCase();
      if (text.includes(query)) {
        section.style.display = '';
      } else {
        section.style.display = 'none';
      }
    });
  });
  