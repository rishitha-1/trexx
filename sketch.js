var invisibleground
var ground
var trex, trex_running, edges;
var groundImage;
var clouds;
var cloudpic

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
  cloudpic = loadImage("cloud.png")
}




function setup(){
  createCanvas(600,200);

  //creating invisible ground
  invisibleground = createSprite(300,195,600,5)
  
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50

  ground = createSprite(300,190,600,5)
  ground.addImage("moving", groundImage)

  invisibleground.visible=false
 
}


function draw(){
  //set background color 
  background("white");

  console.log(frameCount)
  
  //logging the y position of the trex
  //console.log(trex.y)
  
  //jump when space key is pressed
  if(keyDown("space")&&trex.collide(invisibleground)){
    trex.velocityY = -10;
  }
  
  if(ground.x<0){
ground.x=ground.width/2
  }

  trex.velocityY = trex.velocityY + 0.5;

  ground.velocityX = -6

  trex.collide(invisibleground)

  spawnClouds();
  
  //stop trex from falling down
  drawSprites();

}
function spawnClouds(){
  if(frameCount %80===0){

  clouds = createSprite(600,150,20,20);
  clouds.addImage("cloud",cloudpic)
clouds.velocityX=-7;
clouds.y=Math.round(random(80,150))
clouds.scale = 0.7

trex.depth = clouds.depth;
trex.depth = trex.depth+1;

}}
