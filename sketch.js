
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(350,450,50)
	bob2 = new Bob(450,445,50)
	bob3 = new Bob(550,430,50)
	bob4 = new Bob(250,445,50)
	bob5 = new Bob(150,430,50)

	roof = new Roof(350,200,500,30)
	
	rope1 = new Rope(bob1.body,roof.body,0, 0)
	rope2 = new Rope(bob2.body,roof.body,bob2.r*1, 0)
	rope3 = new Rope(bob3.body,roof.body,bob3.r*2, 0)
	rope4 = new Rope(bob4.body,roof.body,-bob4.r*1, 0)
	rope5 = new Rope(bob5.body,roof.body,-bob5.r*2, 0)
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("blue");
  
  drawSprites();
 
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-150,y:-150});
	}
}

