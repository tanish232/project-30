const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground1;
var stand1,stand2;
var box1;
var polygon1;
var slingShot;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground1=new Ground(400,height,800,20);
  stand1=new Ground(450,250,300,10);
  stand2=new Ground(700,150,200,10);
  box1=new Box(450,225,30,40);
  box2=new Box(420,225,30,40);
  box3=new Box(390,225,30,40);
  box4=new Box(480,225,30,40);
  box5=new Box(510,225,30,40); 
  box6=new Box(360,225,30,40);
  box7=new Box(540,225,30,40);

  box8=new Box(450,185,30,40);
  box9=new Box(420,185,30,40);
  box10=new Box(390,185,30,40);
  box11=new Box(480,185,30,40);
  box12=new Box(510,185,30,40);

  box13=new Box(450,145,30,40);
  box14=new Box(420,145,30,40);
  box15=new Box(480,145,30,40);

  box16=new Box(450,105,30,40);

  box17=new Box(700,125,30,40);
  box18=new Box(670,125,30,40);
  box19=new Box(640,125,30,40);
  box20=new Box(730,125,30,40);
  box21=new Box(760,125,30,40);

  box22=new Box(700,85,30,40);
  box23=new Box(670,85,30,40);
  box24=new Box(730,85,30,40);

  box25=new Box(700,55,30,40);
  
 polygon= Bodies.circle(150,150,30)
World.add(world,polygon)

slingShot= new SlingShot(this.polygon,{x:150,y:150});
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  ground1.display(); 
  stand1.display();
  stand2.display();
  box1.display();
  box2.display();  
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();  
  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();
  box15.display();

  box16.display();

  box17.display();
  box18.display();  
  box19.display();
  box20.display();
  box21.display();

  box22.display();  
  box23.display();
  box24.display();
  
  box25.display();
  ellipseMode(CENTER);
  ellipse(polygon.position.x,polygon.position.y,30)
 
  slingShot.display();
 drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
 if(keyCode===32){
   slingShot.attach(this.polygon);
 } 
}