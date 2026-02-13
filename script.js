const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

// YES click
yesBtn.addEventListener("click", () => {
  message.textContent = "YAY!! 💙 I love you forever 😘💖";
  noBtn.style.display = "none";
});

// NO button runs away
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

function moveButton() {

  const card = document.querySelector(".card");

  const cardWidth = card.offsetWidth;
  const cardHeight = card.offsetHeight;

  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = cardWidth - btnWidth - 20;
  const maxY = cardHeight - btnHeight - 20;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}
