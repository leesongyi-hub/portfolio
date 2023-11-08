const root = document.documentElement;

function setTheme(theme) {
  localStorage.lightMode = theme;
  root.setAttribute('data-theme', theme);
}

function toggleTheme() {
  if (localStorage.lightMode === 'dark') {
    setTheme('light');
  } else {
    setTheme('dark');
  }
}

function updateTheme() {
  root.setAttribute('data-theme', localStorage.lightMode || 'light');
}

updateTheme()

let $btnToggleTheme = document.querySelector('.btn-toggle-theme');
$btnToggleTheme.addEventListener('click', function(e) {  
  toggleTheme();
});

// 최상단 이동
let $topBtn = document.querySelector('.btn-top');

$topBtn.addEventListener('click', function(e) {  
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
