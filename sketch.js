var w = window.innerWidth;
var h = window.innerHeight; 
var mon;


function setup() {
  // put setup code here
  canvas = createCanvas(w, h);
  canvas.position(0,0);
  textSize(30);
  textAlign(CENTER, CENTER);
}

function draw() {
  // put drawing code here
  background(0);
  fill(255)
  textFont(mon);
  text("CheeseMans", width/2, 30);
}

function preload(){

  
  mon=loadFont("Montserrat-Medium.ttf");

}