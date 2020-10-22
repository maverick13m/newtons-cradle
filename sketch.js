
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobDiameter = 10

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;

	Roof = new roof(600,100,500,50)
	bobObject1 = new Bob(400,500,100)
	bobObject2 = new Bob(500,500,100)
	bobObject3 = new Bob(600,500,100)
	bobObject4 = new Bob(700,500,100)
	bobObject5 = new Bob(800,500,100)

	
  rope1 = new rope(bobObject1.body,Roof.body,-bobDiameter*2,0) 
  rope2 = new rope(bobObject2.body,Roof.body,-bobDiameter*2,0)
  rope3 = new rope(bobObject3.body,Roof.body,-bobDiameter*2,0)
  rope4 = new rope(bobObject4.body,Roof.body,-bobDiameter*2,0)
  rope5 = new rope(bobObject5.body,Roof.body,-bobDiameter*2,0)
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine)
  Roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

//  *INTERNAL SCREAMING* what is wrong with this

  
}



