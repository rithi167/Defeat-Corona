class Game{
    constructor(){
    }

getState(){
    var gameStateRef = database.ref('gamestate');
    gameStateRef.on("value", function(data){
     gameState = data.val();
    })
}

update(state){
    database.ref('/').update({
     gameState: state
    });
}

async start(){
 if(gameState === 0){
     player = new Player();
     var playerCountRef =  await database.ref('playerCount').once("value");
 
 if(playerCountRef.exists()){
     playerCount = playerCountRef.val();
     player.getCount();
 }
 form = new Form()
 form.display();
}

aisle1 = createSprite(150,100,50,50);
  aisle1.addImage("a1",aisle1);
  aisle2 = createSprite(250,400,50,50);
  aisle2.addImage("a2",aisle2);
  aisle3 = createSprite(350,700,50,50);
  aisle3.addImage("a3",aisle3);
  
  gloves = createSprite(300,50,20,20);
  gloves.addImage("g1",glovesImg);
  mask = createSprite(400,100,20,20);
  mask.addImage("m1",maskImg);
  sanitizer = createSprite(550,200,20,20);
  sanitizer.addImage("s1",sanitizerImg);

cart1 = createSprite(200,200);
cart1.addImage("c1",cart1Img);
cart2 = createSprite(500,200);
cart2.addImage("c2",cart2Img);
cart3 = createSprite(700,200);
cart3.addImage("c3",cart3Img);

// corona = createSprite(200,200,30,30)
// corona = addImage(coronaImg);
}

play(){
form.hide();

Player.getPlayerInfo();
Player.getCartsAtEnd();

corona = createSprite(200,200,30,30)
corona = addImage("c",coronaImg);

if(allPlayers !== undefined){
    background(200);
    image(aisle1, aisle2, aisle3, 200,100,20,20);

for(var plr in allPlayers){
var index = 0;
x = x+30;
y = displayHeight - allPlayers[plr].distance;
carts[index-1].x = x;
carts[index-1].y = y;
}

if(index === player.index){
 stroke(10);
 fill("blue");
 elipse(x,y,50,50);
 carts[index-1].shapeColor = "blue"
 camera.position.x = 200;
 camera.position.y = carts[index-1].y
   }
  }
 

 if(keyIsDown(UP_ARROW) && player.index !== null){
    player.distance += 5
    player.update();
  }

  if(player.distance > 3500){
    gameState = 2;
    player.rank = player.rank+1;
    Player.updateCartsAtEnd(player.rank);
  }
}
  drawSprites();

}