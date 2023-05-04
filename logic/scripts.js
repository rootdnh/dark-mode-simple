const changeThemeBtn = document.querySelector("#change-theme");

function toggleDarkMode() {
 document.body.classList.toggle("dark");
}

function loadTheme() {
 const darMode = localStorage.getItem("dark");

 if (darMode) {
  toggleDarkMode();
 }
}

loadTheme();

changeThemeBtn.addEventListener("change", function () {
 toggleDarkMode();

 localStorage.removeItem("dark");

 if (document.body.classList.contains("dark", 1)) {
  localStorage.setItem("dark", 1);
 }
});
