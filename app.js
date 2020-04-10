const cars = document.querySelectorAll(".car");
const start = document.getElementById("start");
const restart = document.getElementById("restart");
const winners = document.getElementById("winners");

cars.forEach((car) => {
  const { color } = car.dataset;

  car.style.background = color;
});

start.addEventListener("click", () => {
  cars.forEach((car) => {
    const duration = getRandomDuration();
    const { color } = car.dataset;
    car.classList.add("move");
    car.style.animationDuration = duration + "ms";

    setTimeout(() => {
      winners.innerText += `${color}, `;
    }, duration);
  });
});

restart.addEventListener("click", () => {
  cars.forEach((car) => {
    car.classList.remove("move");
    winners.innerText = "Winners: ";
  });
});

function getRandomDuration() {
  return (Math.random() * 3 + 2) * 1000;
}
