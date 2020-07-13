
var r = 1;

var g = 50;

var b = 255;

var colorDec, colorDecAnim;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b
function preload() {
  colorDecAnim = loadImage("Circle.png");
}

function setup(){
  createCanvas(755,400);

  colorDec = createSprite(600, 200, 10, 10);
  colorDec.addImage("t1", colorDecAnim);
  colorDec.scale = .1;
}


function draw(){
  background(rgb(r,g,b));
  colorDec.x = mouseX;
  colorDec.y = mouseY;

  console.log(g)

  // change the value of Red based on the mouse movement about the X axis
  if(mouseX <= 245) {
    r = mouseX;
  }

  if (mouseX > 255 && mouseX <= 500) {
    g = mouseX - 255;
  }

  if (mouseX > 510 && mouseX <= 755){
    b = mouseX - 510;
  }
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so.
  //map()

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
  drawSprites();
}
