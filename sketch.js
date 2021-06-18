const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg, backgroundImg
var particles = []
var boy1

function preload() {
  getBackgroundImg();
  backgroundImg = loadImage("snow1.jpg")
  image1 = loadImage("boy.gif");
}

function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;
  ground1 = new ground(600,height,1200,20);
  boy1 = new boy(800,550,100)
  //boy1i = createSprite(800,500,100,150)
  //boy1i.addImage(image1)
  //boy1i.scale = 0.1
}

function draw() {
  background(0);
  image(backgroundImg,500,300,1000,600) 
  Engine.update(engine);
  ground1.display()
  boy1.display()
  //drawSprites(); 
  if(frameCount%60==0){
    console.log("WHEEEE")
    particles.push(new snowfall(random(0,1000),0,30,30))
  }
  for (var a = 0; a < particles.length; a++) {
    console.log("YEEEET")
    particles[a].display();
  }    
}

async function getBackgroundImg(){
  var d = new Date();
  var hour = d.getHours();
  
  if(hour>=0600 && hour<=1900){
      bg = "snow2.jpg";
  }
  else{
      bg = "snow1.jpg";
  }
  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}
function keyPressed(){
  if(keyCode == 32){
    console.log("BRUH")
    boy1.body.position.x -= 3
  }
}