var bg;
var dog;
function setup() {
  createCanvas(1200,900);
  bg = loadImage("bg.png");
  dog = loadImage("dog.png");
}

function draw() {
  image(bg,0,0);
  image(dog,mouseX-160,mouseY-120);
}
