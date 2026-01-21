function setup() {
  let container = document.getElementById('p5-container');
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('p5-container');
}

function draw() {
  background(0);
  let xInt = map(mouseX, 0, width, 10, 50, true); //map intervals on the x axis to mouseX
  let yInt = map(mouseY, 0, height, 10, 50, true); //map intervals on the y axis to mouseY
  for (let x = 0; x < width; x += xInt) {
    stroke(x / 2 + 55, 100, 0); //mapping the color of the stroke to the x positions of the lines
    line(x, 0, x, height); //draw vertical lines
  }
  for (let y = 0; y < height; y += yInt) {
    stroke(0, 100, y / 2 + 55); //mapping the color of the stroke to the y positions of the lines
    line(0, y, width, y); //draw vertical lines
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
