const canvas = document.querySelector(".canvas");
const canvasWidth = canvas.clientWidth;
const canvasHeight = canvas.clientHeight;

const pixelSize = 50;
const brushColor = "black";

function createDivElement(pixelWidth, pixelHeight) {
  const pixel = document.createElement("div");
  pixel.classList.add("pixel");
  // pixel.style.border = "1px solid grey";
  pixel.style.width = pixelHeight + "px";
  pixel.style.height = pixelWidth + "px";
  canvas.appendChild(pixel);
}

function createPixels(rows, cols) {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      createDivElement(canvasWidth / cols, canvasHeight / rows);
    }
  }

  canvas.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
}

createPixels(pixelSize, pixelSize);

function draw() {
  const pixels = document.querySelectorAll(".pixel");
  pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", () => {
      pixel.style.backgroundColor = brushColor;
    });
  });
}

draw();
