const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const update = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / 100;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(update, 20);
    } else {
      counter.innerText = target;
    }
  };
  update();
});

document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if(name === "" || email === "" || message === ""){
    alert("All fields are required!");
  } else {
    alert("Message sent successfully!");
  }
});

const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if(document.body.classList.contains("dark-mode")){
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
window.onload = () => {
  if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
  }
};