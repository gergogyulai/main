function toggleDarkMode() {
    var body = document.querySelector("body");
    var currentClass = body.className;
    body.className = currentClass == "light-mode" ? "dark-mode" : "light-mode";
    localStorage.setItem("darkMode", body.className);
  }
  
  var darkMode = localStorage.getItem("darkMode");
  if (darkMode) {
    document.querySelector("body").className = darkMode;
  }