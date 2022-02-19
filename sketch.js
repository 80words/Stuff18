const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var forest
var mainbirdImg 
var bird  
var bearImg
var bear
function preload()
{
  forest=loadImage("forest.gif") 
  mainbirdImg=loadImage("Bird.gif") 
  bearImg=loadImage("angrybear.png")
}

function setup() 
{
  createCanvas(windowWidth,windowHeight); 
  bird=createSprite(200,200,20,20) 
  //bear=createSprite(600,600,50,50) 
  bird.addImage(mainbirdImg) 
  bird.scale=0.2 
  
}

function draw() 
{
  background(forest);
  if(keyDown("UP_ARROW")){
    bird.velocityY=-5
  }
  if(keyDown("DOWN_ARROW")){
    bird.velocityY=5
  }  
  if(keyDown("RIGHT_ARROW")){
    bird.velocityX=5
  }  
  if(keyDown("LEFT_ARROW")){
    bird.velocityX=-3
  }  
  if (frameCount%200===0) {
    bear=createSprite(600,600,50,50)
    bear.addImage(bearImg) 
    bear.scale=0.8 
    bear.velocityX=-6  
    bear.velocityY=-6
    bear.y=Math.round(random(50,600)) 
    bear.x=Math.round(random(600,50))
  }
bird.velocityY+=0.1
  drawSprites();

}

