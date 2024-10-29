// Функция для изменения цвета

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

// Contact us popup function

function showPopup() {
  document.getElementById("popupForm").style.display = "flex";
}

function hidePopup() {
  document.getElementById("popupForm").style.display = "none";
}

document.getElementById("popupBtn").onclick = showPopup;

document.querySelector(".close").onclick = hidePopup;

window.onclick = function (event) {
  if (event.target == document.getElementById("popupForm")) {
    hidePopup();
  }
};

const stars = document.querySelectorAll(".star");
const message = document.querySelector(".star-message");

stars.forEach((star) => {
  star.addEventListener("click", () => {
    const rating = star.getAttribute("data-value");
    stars.forEach((star) => star.classList.remove("selected"));

    for (let i = 0; i < rating; i++) {
      stars[i].classList.add("selected");
    }

    message.textContent = `Your rate for our course ${rating} star${
      rating > 1 ? "s" : ""
    }`;
  });
});

document.querySelectorAll(".star").forEach(function (star) {
  star.addEventListener("click", function() {
    document.getElementById("rate-sound").play(); 
    document.getElementById("lottie").style.display = "block";
  animation.play();
  })
})


document.getElementById('resetButton').addEventListener('click', () => {
  document.querySelectorAll('input').forEach(input => input.value = '');
});

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
  let PP = '1';
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


function updateDateTime() {
  const now = new Date();
  const currentDateTime = now.toLocaleString();
  document.querySelector("#datetime").textContent = currentDateTime;
}
setInterval(updateDateTime, 1000);

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




function displayGreeting() {
  const now = new Date();
  const hour = now.getHours();
  let greeting;

  if (hour >= 6 && hour < 12) {
      greeting = "Good Morning!";
  } else if (hour >= 12 && hour < 18) {
      greeting = "Good Afternoon!";
  } else {
      greeting = "Good Evening!";
  }

  alert(greeting);
  const emailname = localStorage.getItem('emailname');
  if (emailname) alert("Welcome, "+ emailname+"!");
}


const FormE777 = document.getElementById('contactForm');

FormE777.addEventListener('submit', ()=>{
   // event.preventDefault();
    const formData = new FormData(FormE777);
    const data = new URLSearchParams(formData);
    fetch ('https://reqres.in/api/users'  ,{
      method: 'POST' , 
      body:data
    }).then(res => res.json())
      .then (data => console.log(data))
      .catch (error => console.log(error));
      alert("Success");
});



