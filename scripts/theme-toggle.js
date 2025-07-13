const toggle = document.getElementById('input');

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    toggle.checked = true;
  } else {
    // по умолчанию — тёмная тема
    document.body.classList.remove('light-theme');
    toggle.checked = false;
  }
});

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    document.body.classList.add('light-theme');
    localStorage.setItem('theme', 'light');
  } else {
    document.body.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark');
  }
});
