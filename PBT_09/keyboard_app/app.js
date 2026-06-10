const images = [
  { src: "https://placehold.co/900x560?text=Image+1", title: "Sunset view" },
  { src: "https://placehold.co/900x560?text=Image+2", title: "Mountain trail" },
  { src: "https://placehold.co/900x560?text=Image+3", title: "City skyline" },
  { src: "https://placehold.co/900x560?text=Image+4", title: "Forest path" },
  { src: "https://placehold.co/900x560?text=Image+5", title: "Beach lights" },
  { src: "https://placehold.co/900x560?text=Image+6", title: "Night road" },
  { src: "https://placehold.co/900x560?text=Image+7", title: "Winter hills" },
  { src: "https://placehold.co/900x560?text=Image+8", title: "River bridge" },
  { src: "https://placehold.co/900x560?text=Image+9", title: "Garden view" },
];

const galleryImage = document.getElementById("galleryImage");
const imageLabel = document.getElementById("imageLabel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const playPauseBtn = document.getElementById("playPauseBtn");
const commandPalette = document.getElementById("commandPalette");
const paletteInput = document.getElementById("paletteInput");
const commandList = document.getElementById("commandList");

let activeIndex = 0;
let slideshowId = null;
const commands = [
  { label: "Next image", action: () => showNextImage() },
  { label: "Previous image", action: () => showPreviousImage() },
  { label: "Play slideshow", action: () => setPlayback(true) },
  { label: "Pause slideshow", action: () => setPlayback(false) },
  { label: "Go to image 1", action: () => goToImage(0) },
  { label: "Go to image 2", action: () => goToImage(1) },
  { label: "Go to image 3", action: () => goToImage(2) },
];

function renderSlide() {
  const image = images[activeIndex];
  galleryImage.src = image.src;
  galleryImage.alt = image.title;
  imageLabel.textContent = `${activeIndex + 1} / ${images.length}: ${image.title}`;
}

function showNextImage() {
  activeIndex = (activeIndex + 1) % images.length;
  renderSlide();
}

function showPreviousImage() {
  activeIndex = (activeIndex - 1 + images.length) % images.length;
  renderSlide();
}

function goToImage(index) {
  activeIndex = Math.min(Math.max(index, 0), images.length - 1);
  renderSlide();
}

function setPlayback(play) {
  if (play) {
    slideshowId = setInterval(showNextImage, 2000);
    playPauseBtn.textContent = "Pause";
  } else {
    clearInterval(slideshowId);
    slideshowId = null;
    playPauseBtn.textContent = "Play";
  }
}

function openPalette() {
  commandPalette.classList.remove("hidden");
  paletteInput.value = "";
  paletteInput.focus();
  renderCommandItems();
}

function closePalette() {
  commandPalette.classList.add("hidden");
}

function renderCommandItems(filter = "") {
  commandList.innerHTML = "";
  const filtered = commands.filter((command) =>
    command.label.toLowerCase().includes(filter.toLowerCase())
  );
  filtered.forEach((command, index) => {
    const item = document.createElement("li");
    item.className = "command-item";
    item.textContent = command.label;
    item.tabIndex = 0;
    item.addEventListener("click", () => {
      command.action();
      closePalette();
    });
    item.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        command.action();
        closePalette();
      }
    });
    commandList.appendChild(item);
  });
}

prevBtn.addEventListener("click", showPreviousImage);
nextBtn.addEventListener("click", showNextImage);
playPauseBtn.addEventListener("click", () => setPlayback(!slideshowId));

window.addEventListener("keydown", (event) => {
  if (commandPalette.classList.contains("hidden")) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      showNextImage();
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPreviousImage();
    }
    if (event.key === " ") {
      event.preventDefault();
      setPlayback(!slideshowId);
    }
    if (/^[1-9]$/.test(event.key)) {
      goToImage(Number(event.key) - 1);
    }
    if (event.key === "k" && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      openPalette();
    }
  } else {
    if (event.key === "Escape") {
      closePalette();
    }
  }
});

paletteInput.addEventListener("input", (event) => {
  renderCommandItems(event.target.value);
});

paletteInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const first = commandList.querySelector("li");
    if (first) {
      first.click();
    }
  }
});

commandPalette.addEventListener("click", (event) => {
  if (event.target === commandPalette) closePalette();
});

renderSlide();
renderCommandItems();
