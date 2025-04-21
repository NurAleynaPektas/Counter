// let btn = document.querySelector("button");

// document.querySelector(".zikirmatik-counter").textContent =
//   localStorage.getItem("zikirmatik-counter")
//     ? localStorage.getItem("zikirmatik-counter")
//     : 0;
// btn.addEventListener("click", function changeColor() {
//   let color =
//     "rgb(" +
//     Math.round(Math.random() * 255) +
//     "," +
//     Math.round(Math.random() * 255) +
//     "," +
//     Math.round(Math.random() * 255) +
//     ")";
//   btn.style.color = color;
//   console.log(`Renginiz : ${color}`);
//   let hours = document.querySelector(".zikirmatik-clock");
//   hours.style.color = color;
//   let counter = document.querySelector(".zikirmatik-counter");
//   counter.style.color = color;
//   let reset = document.querySelector(".zikirmatik-reset");
//   reset.style.color = color;
//   let cumle = document.querySelector(".zikirmatik-cumle");
//   cumle.style.color = color;
// });

// setInterval(() => {
//   document.querySelector(".zikirmatik-clock").textContent =
//     new Date().toLocaleTimeString("tr-TR", { timeZone: "Europe/Istanbul" });
// }, 1000);

// let counter = document.querySelector(".zikirmatik-counter");

// const counterChange = () => {
//   let numbercounter = parseInt(counter.textContent);
//   numbercounter += 1;
//   counter.textContent = numbercounter;
//   navigator.vibrate(250);
//   localStorage.setItem("counter", numbercounter);

//   // @murselsen
//   // 350 ms titreşim verir
//   // Android Tarayıcı uygulamalarında kullanılabilir
//   // IOS bilmiyorum :(
//   // titreşim süresine arttırılabilir.
// };

// const counterArea = document.querySelector(".zikirmatik-counter");
// counterArea.addEventListener("click", counterChange);

// let reset = document.querySelector(".zikirmatik-reset");
// reset.addEventListener("click", function () {
//   let isConfirmed = window.confirm("Reset'lemek istediğinize eminmisiniz?");
//   if (isConfirmed) {
//     counter.textContent = 0;
//   } else {
//   }
// });

// // Cümlelerin listesi
// const cumleler = [
//   "Şüphesiz güçlükle beraber bir kolaylık vardır. ",
//   "Allah’ın rahmetinden ümidinizi kesmeyin.",
//   "Kim zerre kadar iyilik yapmışsa onu görür.",
//   "Kalpler ancak Allah’ı anmakla huzura kavuşur. .",
//   "Sabır ve namazla yardım dileyin. Allah, muhakkak ki sabredenlerle beraberdir.",
//   "Allah, kuluna yetmez mi?",
//   "Rabbiniz, affedicidir, rahmet sahibidir.",
//   "Şükredenlerin kalbi huzurludur.",
//   "Zorluklarla birlikte kolaylık vardır.",
//   "Allah, sabredenlerle beraberdir.",
//   "Şüphesiz Allah, çok bağışlayandır, çok merhamet edendir.",
//   "Eğer onlar gerçekten Allah’a tövbe ederlerse, Allah da onları affeder.",
//   "O, tövbe edenleri kabul eder ve günahları bağışlar.",
// ];

// // Bugünün tarihini al
// const today = new Date();

// // Bugünün yıl, ay, ve günü ile bir sayıya ulaş (örneğin 2025-02-20 için 2025 + 2 + 20)
// const dayIndex = today.getFullYear() + today.getMonth() + today.getDate();

// // Diziden cümleyi seç (mod 7 ile, 7 cümle olduğunda her gün için farklı cümle)
// const selectedCumle = cumleler[dayIndex % cumleler.length];

// // Cümleyi div içine yerleştir
// document.querySelector(".zikirmatik-cumle").innerText = selectedCumle;



// Butonu seç
let btn = document.querySelector("button");

// Sayacı ve diğer elementleri seç
let counterDisplay = document.querySelector(".zikirmatik-counter span");
let reset = document.querySelector(".zikirmatik-reset");
let cumle = document.querySelector(".zikirmatik-cumle");
let clock = document.querySelector(".zikirmatik-clock");

// LocalStorage'dan sayacı çek (yoksa 0 başlat)
let counterValue = localStorage.getItem("zikirmatik-counter")
  ? parseInt(localStorage.getItem("zikirmatik-counter"))
  : 0;
counterDisplay.textContent = counterValue;

// Butona tıklandığında renkleri değiştir
btn.addEventListener("click", function () {
  let color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)})`;

  [btn, clock, counterDisplay, reset, cumle].forEach((el) => {
    el.style.color = color;
  });

  console.log(`Renginiz: ${color}`);
});

// Saat her saniye güncellensin
setInterval(() => {
  clock.textContent = new Date().toLocaleTimeString("tr-TR", {
    timeZone: "Europe/Istanbul",
  });
}, 1000);

// Sayı artışı
const counterChange = () => {
  counterValue += 1;
  counterDisplay.textContent = counterValue;
  localStorage.setItem("zikirmatik-counter", counterValue);
  navigator.vibrate(250);
};

// Sayı artışı tıklamada çalışsın
counterDisplay.parentElement.addEventListener("click", counterChange);

// Reset işlemi
reset.addEventListener("click", function () {
  let isConfirmed = window.confirm("Reset'lemek istediğinize emin misiniz?");
  if (isConfirmed) {
    counterValue = 0;
    counterDisplay.textContent = counterValue;
    localStorage.setItem("zikirmatik-counter", counterValue);
  }
});

// Günlük cümleyi belirle
const cumleler = [
  "Şüphesiz güçlükle beraber bir kolaylık vardır.",
  "Allah’ın rahmetinden ümidinizi kesmeyin.",
  "Kim zerre kadar iyilik yapmışsa onu görür.",
  "Kalpler ancak Allah’ı anmakla huzura kavuşur.",
  "Sabır ve namazla yardım dileyin. Allah, muhakkak ki sabredenlerle beraberdir.",
  "Allah, kuluna yetmez mi?",
  "Rabbiniz, affedicidir, rahmet sahibidir.",
  "Şükredenlerin kalbi huzurludur.",
  "Zorluklarla birlikte kolaylık vardır.",
  "Allah, sabredenlerle beraberdir.",
  "Şüphesiz Allah, çok bağışlayandır, çok merhamet edendir.",
  "Eğer onlar gerçekten Allah’a tövbe ederlerse, Allah da onları affeder.",
  "O, tövbe edenleri kabul eder ve günahları bağışlar.",
];

const today = new Date();
const dayIndex = today.getFullYear() + today.getMonth() + today.getDate();
cumle.textContent = cumleler[dayIndex % cumleler.length];
