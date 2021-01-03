var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;


  box1 = createSprite(400, 200, 50, 50);
  box2 = createSprite(400, 700, 50, 50);
  box1.velocityY=4;
  box2.velocityY=-4;
  //movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0); 
  
 // movingRect.x = mouseX;
  //movingRect.y = mouseY;

  if(isTouching(movingRect,box1)){
    movingRect.shapeColor = "red";
    box1.shapeColor = "red";
  }else{
    movingRect.shapeColor = "green";
    box1.shapeColor = "green";
  }
  BounceOff(box1,box2);

  console.log(addition(123,45457));
  drawSprites();
}

