let app = document.getElementsByTagName("BODY")[0];
if (localStorage.lightMode == "dark") {
  app.setAttribute("data-theme", "dark");
}

function toggle_light_mode() {
  let app = document.getElementsByTagName("BODY")[0];
  if (localStorage.lightMode == "dark") {
    localStorage.lightMode = "light";
    app.setAttribute("data-theme", "light");
  } else {
    localStorage.lightMode = "dark";
    app.setAttribute("data-theme", "dark");
  }
}

window.addEventListener(
  "storage",
  function () {
    if (localStorage.lightMode == "dark") {
      app.setAttribute("data-theme", "dark");
    } else {
      app.setAttribute("data-theme", "light");
    }
  },
  false
);

// Top으로
let topBtn = document.querySelector('.btn-top');

topBtn.addEventListener('click', function(e) {  
  e.preventDefault();
  let scrollOptions = {
    top: 0,
    behavior: 'smooth'
  };
  window.scrollTo(scrollOptions);
});
