var fixedRectangle , movingRectangle

function setup() {
  createCanvas(1200,800);
  fixedRectangle=createSprite(200, 200, 50, 80);
  movingRectangle=createSprite(400,200,80,30)
  fixedRectangle.shapeColor="red";
  movingRectangle.shapeColor="blue";
}

function draw() {
  background("white");  
  movingRectangle.x= mouseX
  movingRectangle.y= mouseY
  console.log (movingRectangle.y-fixedRectangle.y)
  if (movingRectangle.x - fixedRectangle.x<fixedRectangle.width/2+movingRectangle.width/2
    &&fixedRectangle.x-movingRectangle.x<fixedRectangle.width/2+movingRectangle.width/2
    &&fixedRectangle.y-movingRectangle.y<fixedRectangle.height/2+movingRectangle.height/2
    &&movingRectangle.y - fixedRectangle.y<fixedRectangle.height/2+movingRectangle.height/2){
    movingRectangle.shapeColor="black";
  }
  else {
    movingRectangle.shapeColor="blue";
  }
  drawSprites();
}