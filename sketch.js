var survivalTime=0;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstaclesGroup,ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 // createCanvas(600,600);
   monkey=createSprite(80,315,20,20);
   monkey.addAnimation("running",monkey_running);
   monkey.scale=0.1
   
   ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  foodGroup=createGroup();
  obstaclesGroup=createGroup();
}


function draw() {
background("green");
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  foods();
  obstacles();
  if(keyDown("space")){
monkey.velocityY=-12
  }
    monkey.y=monkey.y+0.8;
  if(obstaclesGroup.isTouching(monkey)){
ground.velocityX=0;
monkey.velocityY=0;
obstaclesGroup.setVelocityXEach(0);
foodGroup.setVelocityXEach(0);
obstaclesGroup.setLifetimeEach(-1);
    foodGroup.setLifetimeEach(-1);
  }
  monkey.collide(ground);
  drawSprites();
   stroke("black");   
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survivalTime,100,50); 
}
function foods(){
  if(frameCount%80===0){
    banana=createSprite(600,250,40,10);
    banana.y=Math.round(random(120,200));
  banana.addImage(bananaImage);
  banana.scale=0.05;
  banana.velocityX=-5;
  banana.lifeTime=80;
  foodGroup.add(banana);
  }
}
function obstacles(){
  if(frameCount%300===0){
    obstacle=createSprite(800,320,10,40);
       obstacle.addImage(obstacleImage);
   obstacle.scale=0.15;
    obstacle.velocityX=-5;
    obstacle.lifeTime=80;
    obstaclesGroup.add(obstacle);
  }
}





