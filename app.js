let btn = document.querySelector("button");

btn.addEventListener("click", function changeColor() {
  let color =
    "rgb(" +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    ")";
  btn.style.backgroundColor = color;
  console.log(`Renginiz : ${color}`);
  let hours = document.querySelector(".clock-container");
  hours.style.color = color;
  let counter = document.querySelector(".counter");
  counter.style.color = color;
  let reset = document.querySelector(".reset");
  reset.style.color = color;
});

setInterval(() => {
  document.querySelector(".clock-container").textContent =
    new Date().toLocaleTimeString("tr-TR", { timeZone: "Europe/Istanbul" });
}, 1000);

let counter = document.querySelector(".counter");

counter.addEventListener("click", function count() {
  let numbercounter = parseInt(counter.textContent);
  numbercounter += 1;
  counter.textContent = numbercounter;
  console.log(window);
  console.log(navigator);
  window.navigator.vibrate(15000);
  if ("vibrate" in navigator) {
    alert("Titreşim destekleniyor!");
  } else {
    alert("Cihaz titreşimi desteklemiyor.");
  }
});

let reset = document.querySelector(".reset");
reset.addEventListener("click", function reset() {
  counter.textContent = 0;
});
