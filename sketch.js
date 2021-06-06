var PLAY = 1;
var END = 0;
var gameState = PLAY;

var scrollSpeed = 7;
var x1 = 0;
var x2;

var warBackground, warBackground1;
var BoyStandImg, BoyStand;


function preload(){
 warBackground = loadImage("3840.jpg");
 warBackground1 = loadImage("3840.jpg");
 BoyStandImg = loadAnimation("BoyStand.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  x2 = width;

  BoyStand = createSprite(30,height-220);
  BoyStand.addAnimation("BoyStand",BoyStandImg);
  BoyStand.scale = 1.25
}

function draw() {
  //trex.debug = true;   
  background(255);
 
  image(warBackground, x1,0, width, height);
  image(warBackground1, x2,0, width+20, height);

  x1 -= scrollSpeed;
  x2 -= scrollSpeed;

  if(x1<= -width){
    x1 = width
  }
  if(x2<= -width){
    x2 = width
  }

  
  drawSprites();
}

