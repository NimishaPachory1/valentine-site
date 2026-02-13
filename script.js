const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const celebration = document.getElementById("celebration");
const celebrationGif = document.getElementById("celebrationGif");
const closeCelebration = document.getElementById("closeCelebration");

/**
 * PUT YOUR GIPHY GIF URL HERE
 * Use a direct .gif link OR a normal https link that ends with .gif
 * Example: "https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif"
 */
const CELEBRATION_GIF_URL = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXU2bmRoaHE5YnEzYjc4M3VtN3U0ZGs2cGkwenF6Yms5NnM0OWEzNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Na33dsU2umStO/giphy.gif";

function moveNoButton() {
  const padding = 20;

  // Make it absolutely positioned the first time it moves
  noBtn.style.position = "absolute";

  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const x = Math.floor(Math.random() * maxX) + padding;
  const y = Math.floor(Math.random() * maxY) + padding;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

yesBtn.addEventListener("click", () => {
  celebrationGif.src = CELEBRATION_GIF_URL;
  celebration.classList.remove("hidden");
  celebration.setAttribute("aria-hidden", "false");
});

closeCelebration.addEventListener("click", () => {
  celebration.classList.add("hidden");
  celebration.setAttribute("aria-hidden", "true");
  celebrationGif.src = ""; // stop GIF reload / soundless reset
});
