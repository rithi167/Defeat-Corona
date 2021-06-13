var canvas;
var aisle1, aisle2, aisle3;
var allPlayers, players;
var mask, maskImg;
var gloves, glovesImg;
var sanitizer, sanitizerImg;
var corona ,coronaImg;
var carts, cart1, cart2, cart3;
var gameState = 0;
var distance = 0;
var cart1Img, cart2Img, cart3Img;
var playerCount;
var score = 0;
var database;
var form, game, player;


function preload(){
aisle1 = loadImage("aisle.jpg");
aisle2 = loadImage("aisle.jpg");
aisle3 = loadImage("aisle.jpg");
maskImg = loadImage("mask.png");
glovesImg = loadImage("gloves.png");
sanitizerImg = loadImage("hand_sanitizer.png");
cart1Img = loadImage("shopping.png");
cart2Img = loadImage("shopping.png");
cart3Img = loadImage("shopping.png");
coronaImg = loadImage("corona.png");
}

function setup() {
  canvas = createCanvas(displayWidth-20, displayHeight-30);
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background("white");  
  if(playerCount === 3){
    game.update(1);
  }
  if(gameState === 1){
    game.play();
  }
  if(gameState === 2){
    game.end();
  }

  textSize(15);
  fill("white");
  text("Score: " + score, 1150, 50);

  // if(carts.isTouching(gloves) || carts.isTouching(mask) || carts.isTouching(sanitizer)){
  //   score = score+1;
  // }

  // if(carts.isTouching(corona)){
  //   gameState = 2;
  // }
  
}