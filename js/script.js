// const menuToggle = document.querySelector(".menu-toggle");
// const menu = document.querySelector(".menu");
// const overlay = document.querySelector(".overlay");

// menuToggle.addEventListener("click", function () {
//   this.classList.toggle("active");
//   menu.classList.toggle("active");
//   overlay.classList.toggle("active");
// });

// overlay.addEventListener("click", function () {
//   this.classList.remove("active");
//   menuToggle.classList.remove("active");
//   menu.classList.remove("active");
// });

// const menuLinks = document.querySelectorAll(".list__link");
// menuLinks.forEach((link) => {
//   link.addEventListener("click", function () {
//     overlay.classList.remove("active");
//     menuToggle.classList.remove("active");
//     menu.classList.remove("active");
//   });
// });

let countDownDate;
const savedDate = localStorage.getItem("countdownEndDate");

if (savedDate) {
  countDownDate = new Date(savedDate);
} else {
  countDownDate = new Date();
  countDownDate.setDate(countDownDate.getDate() + 5);
  countDownDate.setHours(countDownDate.getHours() + 16);
  countDownDate.setMinutes(countDownDate.getMinutes() + 7);
  countDownDate.setSeconds(countDownDate.getSeconds() + 0);

  localStorage.setItem("countdownEndDate", countDownDate);
}

const countDate = () => {
  const now = new Date().getTime();

  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "0";
    document.getElementById("hours").innerHTML = "0";
    document.getElementById("minutes").innerHTML = "0";
    localStorage.removeItem("countdownEndDate");
  }
};

countDate();

const x = setInterval(countDate, 1000);

// window.addEventListener("load", () => {
//   setTimeout(() => {
//     document.querySelector(".preloader").classList.add("hide");
//   }, 2700);
// });
