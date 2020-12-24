var car, wall;

function setup() {
  createCanvas(1200,800);
  car=createSprite(200,100,25,25);
  car.shapeColor="red";

  wall=createSprite(700,100,25,100);
  wall.shapeColor="yellow";

  car.velocityX=4;
}

function draw() {
  background(0,0,0);  
  if(isTouching(car,wall)){
    car.shapeColor = "pink";
    wall.shapeColor = "pink";
  }
  
bounceOff(car,wall);
 
  drawSprites();
}
