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
  let cumle = document.querySelector(".cumle");
  cumle.style.color = color;
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
  navigator.vibrate(250);
  localStorage.setItem("counter", numbercounter);

  // @murselsen
  // 350 ms titreşim verir
  // Android Tarayıcı uygulamalarında kullanılabilir
  // IOS bilmiyorum :(
  // titreşim süresine arttırılabilir.
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

// Cümlelerin listesi
const cumleler = [
  "Allah'ım, sana hamd olsun.",
  "Subhanallah, her şey senin kudretindedir.",
  "La ilahe illallah, yalnızca Sen varsın.",
  "Bismillah, her işin başı Senin adındır.",
  "Allah'ın rahmeti üzerimize olsun.",
  "Ya Allah, yardımınla her zorluğu aşarım.",
  "Rabbiniz, affedicidir, rahmet sahibidir.",
  "Şükredenlerin kalbi huzurludur.",
  "Zorluklarla birlikte kolaylık vardır.",
  "Allah, sabredenlerle beraberdir.",
  "Şüphesiz Allah, çok bağışlayandır, çok merhamet edendir.",
  "Eğer onlar gerçekten Allah’a tövbe ederlerse, Allah da onları affeder.",
  "O, tövbe edenleri kabul eder ve günahları bağışlar.",
];

// Bugünün tarihini al
const today = new Date();

// Bugünün yıl, ay, ve günü ile bir sayıya ulaş (örneğin 2025-02-20 için 2025 + 2 + 20)
const dayIndex = today.getFullYear() + today.getMonth() + today.getDate();

// Diziden cümleyi seç (mod 7 ile, 7 cümle olduğunda her gün için farklı cümle)
const selectedCumle = cumleler[dayIndex % cumleler.length];

// Cümleyi div içine yerleştir
document.querySelector(".cumle").innerText = selectedCumle;
