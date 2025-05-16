const endDate = "2025-05-24T23:59:59";

let countDownDate;
const savedDate = localStorage.getItem("countdownEndDate");

if (savedDate) {
  countDownDate = new Date(savedDate);
} else {
  countDownDate = new Date(endDate);
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
  }
};

countDate();

const x = setInterval(countDate, 1000);

localStorage.removeItem("countdownEndDate");