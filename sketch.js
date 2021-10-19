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
  t += taccel/trange;
  
  el1.runtime();




  //must always go last
  cursorruntime();


}

function cursorruntime(){

  fill(0)
  strokeWeight(1.5)
  stroke(255)
  angle1 = (1./3)*(2*Math.PI)
  angle2 = (2./3)*(2*Math.PI)
  point1x = cursorrange*sin(0)
  point1y = cursorrange*cos(0)
  point2x = cursorrange*sin(angle1)
  point2y = cursorrange*cos(angle1)
  point3x = cursorrange*sin(angle2)
  point3y = cursorrange*cos(angle2)
  push()
  translate(mouseX, mouseY)
  rotate(radians(frameCount*rotspeed))
  triangle(point1x,point1y, point2x, point2y, point3x, point3y);
  pop()
}

function mousePressed() {
  
  targrange = inittarg/3
  timer = 0
  if(el1.mouseOver()){

    

  }
  return false;
}

function mouseReleased() {
  
  targrange = inittarg
  return false;
}

function bulkdownload(titles){
  titles = titles || [];
  if ( titles.length > 0 ) {
      var url = '';
      var len = titles.length;
      for ( var ii = 0; ii < len; ii++ ) {
          url = url + 'titles=' + titles[ii];
          if ( ii < len-1 ) {
              url = url + '&';
          }
      }
      $window.open(url);
  }
};

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
  el1 = new element("elementixbanner.png", 0)

}

class element{

  constructor(imgtxt, yv) {
    this.img = loadImage(imgtxt)
    this.y = yv;
    this.x = 0
    this.tintval = 255
    this.targtint = 255
  }

  mouseOver(){
    fill(255)
    stroke(155)
    textFont(mon);
    textSize(70)
    return (mouseX > -1 && mouseX < 1920 && mouseY > this.y && mouseY < this.y+500)
  }

  runtime()
  {
    this.tintval += (this.targtint - this.tintval)/10
    image(this.img, this.x, this.y)
    
    if(this.mouseOver())
    {
      this.targtint = 200
    }
    else
    {
      this.targtint = 255
    }
  }

}