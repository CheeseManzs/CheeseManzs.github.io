var w = window.innerWidth;
var h = window.innerHeight + 200; 
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
var timer = 1000
var sidebarSize = 10
var banner;
var subtexts = ["the z is silent", "at least its not neon blue with no CSS", "[witty quip]", "just click the things ok?", "naming things is hard", "cheesemans.github.io was taken D:", "best website on the planet", "endorsed by the Liechtensteinian government", "boss1986", "it looks kind of empty", "not a true crime podcast", "I am wanted in 186 different countries"]
var st

function setup() {
  // put setup code here
  canvas = createCanvas(w, h);
  canvas.position(0,0);
  textAlign(CENTER, CENTER);
  //noCursor();
  rotspeed *= random(0.9, 3);
  st = random(subtexts)

  //cursorruntime();

}

function draw() {
  // put drawing code here
  var time = millis()
  if(timer > 0){
    timer--;
  }
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
  textSize(15)
  text(st, w/2, banner.height*2 - 15)
  image(banner, w/2 - banner.width/2, banner.height/2 + sin(frameCount/10))
  t += taccel/trange;
  
  el1.runtime();
  el2.runtime();
  el3.runtime();
  el4.runtime();

  fill(60)
  rect(w - sidebarSize, 0, sidebarSize+10, h);
  rect(0, 0, sidebarSize, h);



  //must always go last
  //cursorruntime();


}

function cursorruntime(){

  fill(0)
  strokeWeight(1.5)
  stroke(255)
  mX += (mouseX - mX)/1
  mY += (mouseY - mY)/1
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
  rotate(radians(60))
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
  banner = loadImage("CheeseMansBanner+.png")
  var lengthratio = 250/1920
  var s = lengthratio*w
  el1 = new element("elementixbannercropped.png", 100, 250, 1, "https://github.com/CheeseManzs/CheeseManzs.github.io/raw/f071d9258492f0825d786c7962cc6e714b9096da/Downloads/Elementix%20Launcher.zip", true)
  el2 = new element("siegebannercropped.png", 100+s, 250, 1, "https://github.com/CheeseManzs/CheeseManzs.github.io/raw/main/Downloads/Siege%20Storm.zip", true)
  el3 = new element("rocketbanner.png", 100+s*2, 250, 1, "https://github.com/CheeseManzs/CheeseManzs.github.io/raw/main/Downloads/Rocket%20Rush.zip", true)
  el3 = new element("3subanner.png", 100+s*3, 250, 1, "https://drive.google.com/file/d/1hHFZDkHOLX6tH9FbVl_LtNi1quknuk7E/view?usp=sharing", true)
  el4 = new element("extrasbanner.png", 100+s*4, 250, 1, "old/index.html", false)

}

function crop(image, x, y, w, h) {
  var cropped = createImage(w, h);
  cropped.copy(image, x, y, x + w, y + h, 0, 0, x + w, y + h)
  return cropped;
}

class element{

  constructor(imgtxt, yv, hv, mv, url, newtab) {
    this.y = yv;
    this.x = 0
    this.targx = 0
    this.h = hv
    this.url = url
    this.img = loadImage(imgtxt)
    this.m = mv
    this.nt = newtab
    var lengthratio = this.h/1920
    this.img.resize(w, lengthratio*w)
    console.log(w);
    console.log(lengthratio*w)
    
  }

  mouseOver(){
    fill(255)
    stroke(155)
    textFont(mon);
    textSize(70)
    var lengthratio = this.h/1920
    return (mouseX > -1 && mouseX < w && mouseY > this.y && mouseY < this.y+lengthratio*w)
  }

  runtime()
  {
    
    this.x += (this.targx - this.x)/10
    if(this.mouseOver())
    {
      //tint(this.tintval);
      if(mouseDown && timer <= 0){
        mouseDown = false
        timer = 10000000;
        if(this.nt)
        {
          window.open(this.url)
        }else
        {
          window.open(this.url, "_self")
        }
        
      }
      this.targx = -10*this.m
    }
    else
    {
      this.targx = 0
    }
    var lengthratio = this.h/1920
    image(this.img, this.x, this.y);
    this.img.resize(w, lengthratio*w);
    //noTint();
    
  }

}