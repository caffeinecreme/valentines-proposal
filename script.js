function acceptProposal() {
  const proposal = document.getElementById("proposal");
  const thankYouMessage = document.getElementById("thankYouMessage");

  proposal.classList.add("fade-out");

  setTimeout(() => {
    proposal.style.display = "none";
    setTimeout(() => {
      thankYouMessage.classList.add("fade-in");
    }, 10);
  }, 500);
}

function moveButton(button) {
  if (!button.classList.contains("moving")) {
    button.classList.add("moving");
    const rect = button.getBoundingClientRect();
    button.style.left = rect.left + "px";
    button.style.top = rect.top + "px";
  }

  const maxX = window.innerWidth - button.offsetWidth;
  const maxY = window.innerHeight - button.offsetHeight;
  const x = Math.max(0, Math.min(maxX, Math.random() * maxX));
  const y = Math.max(0, Math.min(maxY, Math.random() * maxY));
  button.style.left = x + "px";
  button.style.top = y + "px";
}

function createHeart(initialY = "120vh") {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 95 + "vw";
  heart.style.animationDuration = Math.random() * 15 + 20 + "s";

  if (initialY !== "120vh") {
    heart.style.transform = `translateY(${initialY}vh) scale(${
      0.3 + Math.random() * 0.7
    })`;
  }

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 35000);

  return heart;
}

for (let i = 0; i < 100; i++) {
  const initialY = Math.random() * 120;
  const heart = document.createElement("div");

  heart.className = "heart";
  heart.style.left = Math.random() * 95 + "vw";
  heart.style.top = initialY + "vh";
  heart.style.animationDuration = Math.random() * 15 + 20 + "s";
  heart.style.animationDelay = (-initialY / 120) * 30 + "s";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 35000);
}

setInterval(createHeart, 100);
