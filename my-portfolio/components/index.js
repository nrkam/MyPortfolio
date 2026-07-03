console.log('done!')
const switcher = document.querySelector('[data-js-theme-switcher]');
const checkbox = document.querySelector('[data-js-theme-switcher-checkbox]');
console.log('switcher:', switcher);
console.log('checkbox:', checkbox);
console.log('Скрипт загрузился!');

(function() {
  const switcher = document.querySelector('[data-js-theme-switcher]');
  const checkbox = document.querySelector('[data-js-theme-switcher-checkbox]');
  if (!switcher || !checkbox) {
    console.warn('Переключатель не найден!');
    return;
  }

  function setTheme(isDark) {
    if (isDark) {
      document.body.classList.add('dark-theme');
      checkbox.checked = true;
    } else {
      document.body.classList.remove('dark-theme');
      checkbox.checked = false;
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    console.log('Тема установлена:', isDark ? 'dark' : 'light');
  }

  const saved = localStorage.getItem('theme');
  if (saved) {
    setTheme(saved === 'dark');
  } else {
    setTheme(false);
  }

  checkbox.addEventListener('change', function() {
    setTheme(this.checked);
  });
})();

document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('[data-js-header]');
  if (header) {
    window.addEventListener('scroll', function() {
      header.classList.toggle('scrolled', window.scrollY > 5);
    });
  }
});