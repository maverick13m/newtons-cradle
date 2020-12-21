const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var roof, bob1, bob2, bob3, bob4, bob5, bob6, bob7
var rope1, rope2, rope3, rope4, rope5, rope6, rope7

function setup(){
    createCanvas(600,600);
   
    engine = Engine.create();
    world = engine.world;

    roof = new Roof(width/2, 50, 500, 30)

    pos =roof.body.position.x
    dia = 60
    
    bob1 = new Bob(pos-dia*2, 400, dia)
    bob2 = new Bob(pos-dia , 400, dia)
    bob3 = new Bob(pos, 400, dia)
    bob4 = new Bob(pos+dia , 400, dia)
    bob5 = new Bob(pos+dia*2, 400, dia)
   

    rope1 = new Rope(bob1.body, roof.body, -dia*2,0)
    rope2 = new Rope(bob2.body, roof.body, -dia,0)
    rope3 = new Rope(bob3.body, roof.body, 0,0)
    rope4 = new Rope(bob4.body, roof.body, dia,0)
    rope5 = new Rope(bob5.body, roof.body, dia*2,0)
    
}

function draw(){
    background(255);
    Engine.update(engine);

    roof.display()

    bob1.display()
    bob2.display()
    bob3.display()
    bob4.display()
    bob5.display()
    
    rope1.display()
    rope2.display()
    rope3.display()
    rope4.display()
    rope5.display()

}

function keyPressed(){
    if(keyCode == UP_ARROW){
        Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-285,y:200})
    }
}