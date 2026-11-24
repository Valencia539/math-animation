let sprite;
function preload() { 
  sprite = loadImage("sprite.png");
}

let speed = 4; 

function setup() {
  createCanvas(600, 400);
  noStroke();
}

let collisionX = 600;
let collisionY = [150, 200, 250, 300, 350];
let collisionYFinal = 200; 
let collisonWidth = 70; 
function GenerateCollision(){ 

  if(collisionX <= 0-collisonWidth){
    collisionX = 600;
    point++;
    collisionYFinal = random(collisionY); 
  }
  fill(200, 255, 200);
  rect(collisionX, collisionYFinal, collisonWidth, height);
  rect(collisionX, collisionYFinal-150, collisonWidth, -height);

  collisionX -= speed;
}

function mousePressed(){
  velocity = -6;
}
     
let playerY = 300, velocity = 0;

function spawnPlayer(){
  let playerX = 100, playerWidth = 40, playerHeight = 40;
  image(sprite, playerX, playerY, playerWidth, playerHeight);
  
  if (playerX + playerWidth > collisionX && playerX < collisionX + collisonWidth && (playerY + playerHeight > collisionYFinal || playerY < collisionYFinal - 150
  )){
    noLoop();
    textSize(40);
    fill(255, 0, 0);
    text("GAME OVER", 160, 200);
  }
}

let point = 0;

function draw() {
  background(200, 200, 255);
  
  GenerateCollision();
  velocity += 0.4; 
  playerY = constrain(playerY + velocity, 16, 584); 
  if (playerY === 16 || playerY === 584) velocity = 0;


  spawnPlayer();

  textSize(20);
  fill(0);
  text("Score: " + point, 10, 30);
  text("Click to fly", 500, 30);
}
