const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// Overlay elements
const overlay = document.getElementById("celebrate");
const celebrateGif = document.getElementById("celebrateGif");
const celebrateCaption = document.getElementById("celebrateCaption");
const closeOverlay = document.getElementById("closeOverlay");

// Put your gif choices here (pick your favorite)
const gifOptions = [
  {
    url: "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
    caption: "You just made an excellent life decision."
  },
  {
    url: "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",
    caption: "Welcome to the ‘Yes’ club. Membership: elite."
  },
  {
    url: "https://media.giphy.com/media/26u4lOMA8JKSnL9Uk/giphy.gif",
    caption: "I knew you had taste."
  }
];

// Make NO run away more dramatically
function moveNoButton() {
  const padding = 12;
  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const x = Math.max(padding, Math.floor(Math.random() * maxX));
  const y = Math.max(padding, Math.floor(Math.random() * maxY));

  // Put it somewhere random
  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  // Add a little spin for drama
  const spin = (Math.random() * 16 - 8).toFixed(1);
  noBtn.style.transform = `rotate(${spin}deg) scale(1.02)`;
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveNoButton();
});

// YES shows overlay + gif
yesBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const pick = gifOptions[Math.floor(Math.random() * gifOptions.length)];
  celebrateGif.src = pick.url;
  celebrateCaption.textContent = pick.caption;

  overlay.classList.remove("hidden");
  overlay.setAttribute("aria-hidden", "false");

  // Optional: disable buttons after yes
  yesBtn.disabled = true;
  noBtn.disabled = true;
});

// Close overlay
closeOverlay.addEventListener("click", () => {
  overlay.classList.add("hidden");
  overlay.setAttribute("aria-hidden", "true");
});
