

// to create global variables for car,wall,speed,weight and divider lines
var bullet,bullet1,bullet2,wall,wall1,wall2;
var speed,speed1,speed2,weight,weight1,weight2,thickness,thickness1,thickness2;
var div1,div2;

// setup function
function setup() {
  // to create and assign dimensions to the canvas
  createCanvas(1600,700);
  // to give different random number values as speeds for the three different cars
  thickness=random(22,83);
  thickness1=random(22,83);
  thickness2=random(22,83);

  // to give different random number values as weights for the three different cars
  weight = random(30,52);
  weight1 = random(30,52);
  weight2 = random(30,52);

  speed = random(223,321);
  speed1 = random(223,321);
  speed2 = random(223,321);

  // to create car
  bullet = createSprite(50,100,20,10);
  bullet.shapeColor = ("white");

  bullet1 = createSprite(50,300,20,10);
  bullet1.shapeColor = ("white");

  bullet2 = createSprite(50,500,20,10);
  bullet2.shapeColor = ("white");

   // to create wall
   wall = createSprite(1200,100,thickness,120);
   // to give colour to the wall
   wall.shapeColor = ("orange");

  wall1 = createSprite(1200,300,thickness1,120);
  wall1.shapeColor = ("orange");

  wall2 = createSprite(1200,500,thickness2,120);
  wall2.shapeColor = ("orange");

  // to assign the speeds as the car's velocityX
  bullet.velocityX = speed;
  bullet1.velocityX = speed1;
  bullet2.velocityX = speed2;

  // to create dividers
  div1 = createSprite(800,200,1600,10);
  div1.shapeColor = ("white");

  div2 = createSprite(800,400,1600,10);
  div2.shapeColor = ("white");


}

// function draw
function draw() {
  // to give orange colour to the background
  background("aqua");

  textSize(22);
fill("purple");
text("Wall Testing System",530,25);

  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    textSize(15);
    fill("Black");
    text("Bullet Speed:"+ Math.round(speed),50,50);
    textSize(15);
    fill("Black");
    text("Bullet Weight:"+ Math.round(weight),50,80);
    textSize(15);
    fill("Black");
    text("Wall Thickness:"+ Math.round(thickness),50,110);
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    textSize(15);
    fill("Black");
    text("Wall Damage:"+ Math.round(damage),50,140);

    if(damage > 10){
      textSize(15);
    fill("red");
    text("Wall Strength: Uneffective",20,170);
      wall.shapeColor = ("red");
    }

    if(damage < 10){
      textSize(15);
    fill("green");
    text("Wall Strength: Effective",20,170);
      wall.shapeColor = ("green");
    }
  }

  if(hasCollided1(bullet1,wall1)){
    bullet1.velocityX = 0;
    textSize(15);
    fill("Black");
    text("Bullet Speed:"+ Math.round(speed1),50,250);
    textSize(15);
    fill("Black");
    text("Bullet Weight:"+ Math.round(weight1),50,280);
    textSize(15);
    fill("Black");
    text("Wall Thickness:"+ Math.round(thickness1),50,310);
    var damage = 0.5*weight1*speed1*speed1/(thickness1*thickness1*thickness1);
    textSize(15);
    fill("Black");
    text("Wall Damage:"+ Math.round(damage),50,340);

    if(damage > 10){
      textSize(15);
      fill("red");
      text("Wall Strength: Uneffective",20,370);
      wall1.shapeColor = ("red");
    }

    if(damage < 10){
      textSize(15);
      fill("green");
      text("Wall Strength: Effective",20,370);
      wall1.shapeColor = ("green");
    }
  }

  if(hasCollided2(bullet2,wall2)){
    bullet2.velocityX = 0;
    textSize(15);
    fill("Black");
    text("Bullet Speed:"+ Math.round(speed2),50,450);
    textSize(15);
    fill("Black");
    text("Bullet Weight:"+ Math.round(weight2),50,480);
    textSize(15);
    fill("Black");
    text("Wall Thickness:"+ Math.round(thickness2),50,510);
    var damage = 0.5*weight2*speed2*speed2/(thickness2*thickness2*thickness2);
    textSize(15);
    fill("Black");
    text("Wall Damage:"+ Math.round(damage),50,540);

    if(damage > 10){
      textSize(15);
      fill("red");
      text("Wall Strength: Uneffective",20,570);
      wall2.shapeColor = ("red");
    }

    if(damage < 10){
      textSize(15);
      fill("green");
      text("Wall Strength: Effective",20,570);
      wall2.shapeColor = ("green");
    }
  }

  // to display the sprites
  drawSprites();
}

function hasCollided (lbullet,lwall){

bulletRightEdge = lbullet.x+lbullet.width;
wallLeftEdge = lwall.x;
if(bulletRightEdge>=wallLeftEdge){
return true;
}

return false;



}

function hasCollided1 (lbullet1,lwall1){

  bullet1RightEdge = lbullet1.x+lbullet1.width;
  wall1LeftEdge = lwall1.x;
  if(bullet1RightEdge>=wall1LeftEdge){
  return true;
  }
  
  return false;
  
  
  
  }

  function hasCollided2 (lbullet2,lwall2){

    bullet2RightEdge = lbullet2.x+lbullet2.width;
    wall2LeftEdge = lwall2.x;
    if(bullet2RightEdge>=wall2LeftEdge){
    return true;
    }
    
    return false;
    
    
    
    }