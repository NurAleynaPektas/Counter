let btn = document.querySelector("button");
document.querySelector(".counter").textContent = localStorage.getItem("counter")
  ? localStorage.getItem("counter")
  : 0;
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

const counterChange = () => {
  let numbercounter = parseInt(counter.textContent);
  numbercounter += 1;
  counter.textContent = numbercounter;
  localStorage.setItem("counter", numbercounter);

  // @murselsen
  // 350 ms titreşim verir
  // Android Tarayıcı uygulamalarında kullanılabilir
  // IOS bilmiyorum :(
  navigator.vibrate(300); // titreşim süresine arttırılabilir.
};

const counterArea = document.querySelector(".counter");
counterArea.addEventListener("click", counterChange);

let reset = document.querySelector(".reset");
reset.addEventListener("click", function () {
  let isConfirmed = window.confirm("Reset'lemek istediğinize eminmisiniz?");
  if (isConfirmed) {
    counter.textContent = 0;
  } else {
  }
});
//
