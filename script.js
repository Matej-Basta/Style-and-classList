const alerts = [
  "Unable to access resource. User is not authorized.",
  "You are missing proper user permissions.",
  "Administrators have been notified of this action.",
  "Please remain where you are, police is on the way.",
];

const body = document.querySelector("body");

body.innerHTML = "<div class='alerts'></div>";

const container = document.querySelector(".alerts");
console.log(container);

alerts.forEach((element) => {
  console.log(element);
  container.innerHTML += `<div class="alert"><div class="alert__text">${element}</div><div class="alert__close">&times;</div></div>`;
});

const alertElements = Array.from(document.querySelectorAll(".alert"));

console.log(alertElements);

alertElements.forEach((element) => {
  element.classList.add("alert--error");
  element.addEventListener("click", () => {
    element.classList.toggle("alert--seen");
  });
});

const alertCloses = Array.from(document.querySelectorAll(".alert__close"));
alertCloses.forEach((element) => {
  element.addEventListener("click", () => {
    element.parentNode.style.display = "none";
  });
});
