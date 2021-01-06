
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,dustbin,ground;
var box1,box2,box3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    ground = new Ground(400,690,800,10)

  paper=new Paper(50,650,20);

	box1=new Dustbin(700,675,150,20);
	box2=new Dustbin(785,648,20,75);
	box3=new Dustbin(615,648,20,75);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
  keyPressed();
 
}

function keyPressed(){

  if(keyCode === UP_ARROW){

    Matter.Body.applyForce(paper.body,paper.body.position,{x:0.2,y:-1});
  }
}

