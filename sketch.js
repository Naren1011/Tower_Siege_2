const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var stand;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13;

function preload(){
    polygon_img = loadImage("polygon.png");
}

function setup() {
 var canvas = createCanvas(800,400);
 
 engine = Engine.create();
 world = engine.world;

 ground = new Ground(400,400,800,20);

 stand = new Ground(600,270,200,5);

 var options={
   restitution : 1,
   friction : 1
 }
 polygon = Bodies.circle(500,200,20,options);
 World.add(world,polygon);

 slingShot = new SlingShot(this.polygon,{x:100,y:200});
  
  //Bottom Layer
  box1 = new Box(600,260,20,20);
  box2 = new Box(620,260,20,20);
  box3 = new Box(580,260,20,20);
  box4 = new Box(640,260,20,20);
  box5 = new Box(560,260,20,20);

  //Middle Layer
  box6 = new Box(570,240,20,20);
  box7 = new Box(590,240,20,20);
  box8 = new Box(610,240,20,20);
  box9 = new Box(630,240,20,20);

  //Third layer
  box10 = new Box(620,220,20,20);
  box11 = new Box(600,220,20,20);
  box12 = new Box(580,220,20,20);

  //Last Layer
  box13 = new Box(600,200,20,20);

}

function draw() {
  background(200);  
 
  Engine.update(engine);

  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);
  
  ground.display();
  stand.display();
  
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
  

  

  slingShot.display();
  

}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingShot.fly();
}