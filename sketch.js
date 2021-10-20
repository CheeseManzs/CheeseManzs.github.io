var w = window.innerWidth;
var h = window.innerHeight; 
var t = 0;
var taccel = 0.3
var trange = 10
var mon;
var cursorrange = 0
var targrange = 12
var inittarg = 12
var rotspeed = 3
var bpm = 131
var timer = 0
var el1
var mouseDown = false
var mX = 0
var mY  = 0

function setup() {
  // put setup code here
  canvas = createCanvas(w, h*4);
  canvas.position(0,0);
  textAlign(CENTER, CENTER);
  noCursor();


  cursorruntime();

}

function draw() {
  // put drawing code here
  var time = millis()
  cursorrange += (targrange - cursorrange)/10
  timer += deltaTime/1000
  if(timer > 60/bpm){
    timer = 0
    //cursorrange += 10
  }
  background(0);
  fill(255)
  stroke(155)
  textFont(mon);
  textSize(70)
  text("CheeseMans", w/2, 35)
  t += taccel/trange;
  
  el1.runtime();
  el2.runtime();




  //must always go last
  cursorruntime();


}

function cursorruntime(){

  fill(0)
  strokeWeight(1.5)
  stroke(255)
  mX += (mouseX - mX)/5
  mY += (mouseY - mY)/5
  angle1 = (1./3)*(2*Math.PI)
  angle2 = (2./3)*(2*Math.PI)
  point1x = cursorrange*sin(0)
  point1y = cursorrange*cos(0)
  point2x = cursorrange*sin(angle1)
  point2y = cursorrange*cos(angle1)
  point3x = cursorrange*sin(angle2)
  point3y = cursorrange*cos(angle2)
  push()
  translate(mX, mY)
  rotate(radians(frameCount*rotspeed))
  triangle(point1x,point1y, point2x, point2y, point3x, point3y);
  pop()
}

function mousePressed() {
  
  mouseDown = true;
  targrange = inittarg/3
  timer = 0;
  return false;
}

function mouseReleased() {
  
  mouseDown = false;
  targrange = inittarg
  return false;
}
function textprint(tex, size, posx, posy, col, fon)
{
  fill(col)
  textFont(fon);
  text(tex, posx, posy);
}

function cosinlaw(a,b,g){

  return Math.sqrt(a*a + b*b - 2*a*b*Math.cos(g))

}

function preload(){
  mon=loadFont("Montserrat-Medium.ttf");
  el1 = new element("elementixbannercropped.png", 100, 250, "https://github.com/CheeseManzs/CheeseManzs.github.io/raw/f071d9258492f0825d786c7962cc6e714b9096da/Downloads/Elementix%20Launcher.zip")
  el2 = new element("siegebannercropped.png", 350, 250, "https://github.com/CheeseManzs/CheeseManzs.github.io/raw/f071d9258492f0825d786c7962cc6e714b9096da/Downloads/Elementix%20Launcher.zip")

}

function crop(image, x, y, w, h) {
  var cropped = createImage(w, h);
  cropped.copy(image, x, y, x + w, y + h, 0, 0, x + w, y + h)
  return cropped;
}

class element{

  constructor(imgtxt, yv, hv, url) {
    this.y = yv;
    this.x = 0
    this.tintval = 255
    this.targtint = 255
    this.h = hv
    this.url = url
    this.img = loadImage(imgtxt)
  }

  mouseOver(){
    fill(255)
    stroke(155)
    textFont(mon);
    textSize(70)
    return (mouseX > -1 && mouseX < 1920 && mouseY > this.y && mouseY < this.y+this.h)
  }

  runtime()
  {
    this.tintval += (this.targtint - this.tintval)/10
    if(this.mouseOver())
    {
      //tint(this.tintval);
      if(mouseDown){
        window.open(el1.url)
      }
      this.targtint = 200
    }
    else
    {
      this.targtint = 255
    }
    image(this.img, this.x, this.y);
    //noTint();
    
  }

}