const music = document.getElementById("bgMusic");
const playButton = document.getElementById("playButton");

let currentPage = 1;

function showPage(number) {
  const current = document.getElementById(`page-${currentPage}`);
  const next = document.getElementById(`page-${number}`);

  if (!next || number === currentPage) {
    return;
  }

  current.classList.remove("active");

  window.setTimeout(() => {
    next.classList.add("active");
  }, 120);

  currentPage = number;
}

playButton.addEventListener("click", async () => {
  try {
    if (music.paused) {
      await music.play();
      playButton.textContent = "PAUSE";
      playButton.classList.add("playing");
    } else {
      music.pause();
      playButton.textContent = "PLAY";
      playButton.classList.remove("playing");
    }
  } catch (error) {
    playButton.textContent = "TRY AGAIN";
  }
});

document.querySelectorAll("[data-next]").forEach((button) => {
  button.addEventListener("click", () => {
    showPage(Number(button.dataset.next));
  });
});

music.addEventListener("play", () => {
  playButton.textContent = "PAUSE";
  playButton.classList.add("playing");
});

music.addEventListener("pause", () => {
  playButton.textContent = "PLAY";
  playButton.classList.remove("playing");
});
