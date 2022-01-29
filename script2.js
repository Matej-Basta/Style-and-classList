const arrayOfAlerts = document.querySelectorAll(".alert");

arrayOfAlerts.forEach((element) => {
  const type = element.getAttribute("data-type");
  element.classList.add(`alert--${type}`);
});
