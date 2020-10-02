var thickness,wall;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  
  //create bullet
  bullet=createSprite(50,200,20,20);
  bullet.shapeColor=color("white");
  bullet.velocityX=speed;
  
  //create wall
  wall=createSprite(1200,200,thickness,200);
  wall.shapeColor=color("blue");

}

function draw() {
  background("black");  

if (hasCollided(bullet,wall)){
  
  bullet.velocityX=0;
  
  var damage=0.5 * weight * speed * speed/(thickness*thickness*thickness);
  
if (damage>10){
    wall.shapeColor=color(255,0,0);
  }

if(damage<10){
    wall.shapeColor=color(0,255,0);
  }
}

  drawSprites();
}

function hasCollided(bullet,wall){
  bulletRightEdge=lbullet.x+lbllet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;

}