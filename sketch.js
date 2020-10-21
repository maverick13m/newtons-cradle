
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;

	Roof = new roof(600,100,500,50)
	bobObject1 = new Bob(250,200,80)
	bobObject2 = new Bob(500,500,80)
	bobObject3 = new Bob(600,500,80)
	bobObject4 = new Bob(700,500,80)
	bobObject5 = new Bob(950,200,80)

	
  rope1 = new rope(bobObject1.body,Roof.body,-bobDiameter*2,0) 
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  Roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  
}



