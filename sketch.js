
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;
var dustbin1, dustbin2, dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(1350, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100,50,25);
	ground = new Ground(675,670,1350,20);
	dustbin1 = new Dustbin(1100,650,200,20);
	dustbin2 = new Dustbin(1000,600,20,100);
	dustbin3 = new Dustbin(1200,600,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	paper.display(); 
	ground.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();

	keyPressed();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Body.applyForce(paper.body,paper.body.position,{x:50,y:-50});

	}
}