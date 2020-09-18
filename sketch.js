const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var score = 0;

p5.disableFriendlyErrors = true;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
	world = engine.world;

  var L1T1Y = 300;

  var L2T1Y = L1T1Y - 50;
  var L3T1Y = L1T1Y - 100;
  var L4T1Y = L1T1Y - 150;
  var L5T1Y = L1T1Y - 200;

  var C5T1X = 400;

  var C1T1X = C5T1X - 100;
  var C2T1X = C5T1X - 75;
  var C3T1X = C5T1X - 50;
  var C4T1X = C5T1X - 25;
  var C6T1X = C5T1X + 25;
  var C7T1X = C5T1X + 50;
  var C8T1X = C5T1X + 75;
  var C9T1X = C5T1X + 100;

  ground1 = new Ground(C5T1X,L1T1Y+35,250,20);

  block1 = new Box(C1T1X,L1T1Y,25,50);
  block2 = new Box(C2T1X,L1T1Y,25,50);
  block3 = new Box(C3T1X,L1T1Y,25,50);
  block4 = new Box(C4T1X,L1T1Y,25,50);
  block5 = new Box(C5T1X,L1T1Y,25,50);
  block6 = new Box(C6T1X,L1T1Y,25,50);
  block7 = new Box(C7T1X,L1T1Y,25,50);
  block8 = new Box(C8T1X,L1T1Y,25,50);
  block9 = new Box(C9T1X,L1T1Y,25,50);

  block10 = new Box(C2T1X,L2T1Y,25,50);
  block11 = new Box(C3T1X,L2T1Y,25,50);
  block12 = new Box(C4T1X,L2T1Y,25,50);
  block13 = new Box(C5T1X,L2T1Y,25,50);
  block14 = new Box(C6T1X,L2T1Y,25,50);
  block15 = new Box(C7T1X,L2T1Y,25,50);
  block16 = new Box(C8T1X,L2T1Y,25,50);

  block17 = new Box(C3T1X,L3T1Y,25,50);
  block18 = new Box(C4T1X,L3T1Y,25,50);
  block19 = new Box(C5T1X,L3T1Y,25,50);
  block20 = new Box(C6T1X,L3T1Y,25,50);
  block21 = new Box(C7T1X,L3T1Y,25,50);

  block22 = new Box(C4T1X,L4T1Y,25,50);
  block23 = new Box(C5T1X,L4T1Y,25,50);
  block24 = new Box(C6T1X,L4T1Y,25,50);

  block25 = new Box(C5T1X,L5T1Y,25,50);

  ball = new Ball(100, 200, 30);

  rope = new SlingShot(ball.body, {x:170, y:200});

  Engine.run(engine);
}

function draw() {
  background(255,255,255);

  ground1.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  block22.display();
  block23.display();
  block24.display();

  block25.display();

  ball.display();

  rope.display();

  console.log(score);

  text(score ,15, 15)

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  rope.fly();
}

function keyPressed(){
  if(keyCode === 32){
     rope.attach(ball.body);
  }
}