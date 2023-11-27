// EJ's sushiria
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let backg;

function preload(){
  backg = loadImage("cafe-back")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  circle(mouseX, mouseY, 100)
}
