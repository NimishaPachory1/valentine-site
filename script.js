const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const celebration = document.getElementById("celebration");
const celebrationGif = document.getElementById("celebrationGif");
const closeCelebration = document.getElementById("closeCelebration");

/* PUT YOUR GIPHY URL HERE */
const CELEBRATION_GIF_URL =
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXU2bmRoaHE5YnEzYjc4M3VtN3U0ZGs2cGkwenF6Yms5NnM0OWEzNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Na33dsU2umStO/giphy.gif";


/* Make NO hide behind YES */
function hideBehindYes() {
  const yesRect = yesBtn.getBoundingClientRect();

  noBtn.style.position = "absolute";
  noBtn.style.left = yesRect.left + 15 + "px";
  noBtn.style.top = yesRect.top + 10 + "px";
  noBtn.style.zIndex = "1";
}

noBtn.addEventListener("mouseenter", hideBehindYes);
noBtn.addEventListener("click", hideBehindYes);


/* YES button */
yesBtn.addEventListener("click", () => {
  celebrationGif.src = CELEBRATION_GIF_URL;
  celebration.classList.remove("hidden");
});


/* Close overlay */
closeCelebration.addEventListener("click", () => {
  celebration.classList.add("hidden");
  celebrationGif.src = "";
});
