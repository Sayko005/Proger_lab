document.querySelectorAll(".bad-paragraphs").forEach(function (element) {
    element.classList.toggle("light-style-color");
  });
  function updateDateTime() {
    const now = new Date();
    const currentDateTime = now.toLocaleString();
    document.querySelector("#datetime").textContent = currentDateTime;
  }
  setInterval(updateDateTime, 1000);
  
  function changeColor() {
    document.getElementById("body").classList.toggle("dark-style");
    document.getElementById("box").classList.toggle("dark-style");
    document.querySelectorAll("a").forEach(function (element) {
      element.classList.toggle("dark-style");
    });
    document
      .querySelectorAll("p, h1, h2, h3, h5, h6")
      .forEach(function (element) {
        element.classList.toggle("dark-style-color");
      });
    document.querySelectorAll("h4").forEach(function (element) {
      element.classList.toggle("light-style-color");
    });
    document.getElementById("login-link").classList.toggle("btn-outline-light");
    document.getElementById("login-link").classList.toggle("btn-outline-dark");
    if (
      document.getElementById("login-link").classList.contains("btn-outline-dark")
    ) {
      document.getElementById("login-link").style.color = "black";
    } else {
      document.getElementById("login-link").style.color = "white";
    }
    let nav = document.querySelector("nav");
    if (nav.classList.contains("navbar-dark")) {
      nav.classList.remove("navbar-dark", "bg-dark");
      nav.classList.add("navbar-light", "bg-light");
    } else {
      nav.classList.remove("navbar-light", "bg-light");
      nav.classList.add("navbar-dark", "bg-dark");
    }
  }
  
  document.getElementById("change-bg").onclick = changeColor;


  document.addEventListener('keydown', function(event) {
    if (event.key == 'ArrowLeft' || event.key == 'ArrowRight') {
      navigateToPagewithActions(event.key);
      
    }
  });
  
  function navigateToPagewithActions(key){
    const pageMap = {
      '1': 'index.html',  
      '2': 'About Course.html',
      '3': 'Teachers.html',
      '4': 'Students.html',
      '5': 'About Us.html',
      '6': 'login.html'
    };
    let PP = '3';
    if (key == 'ArrowRight'){
      PP++;
    }
    if (key == 'ArrowLeft'){
      PP--;
    }
    if (pageMap[PP]){
      window.location.href = pageMap[PP];
    }
  }

  const emailname = localStorage.getItem('emailname');
if (emailname){
  document.getElementById("login-link").style.display = "none";
  document.getElementById("logout-link").style.display = "flex";
}

document.getElementById("logout-link").onclick = logoutfunc;

function logoutfunc(){
  localStorage.removeItem('emailname');
  document.getElementById("login-link").style.display = "flex";
  document.getElementById("logout-link").style.display = "none";
}