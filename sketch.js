const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(446,100,350,20,roof_options);
    World.add(world,roof);
	bob1=new Bob(385,300,15);
	bob2=new Bob(416,300,15);
	bob3=new Bob(448,300,15);
	bob4=new Bob(480,300,15);
	bob5=new Bob(512,300,15);

	rope1=new Rope(bob1.body,roof,{x:bob1.body.position.x,y:bob1.body.position.y},{x:385,y:100});
	rope2=new Rope(bob2.body,roof,{x:bob2.body.position.x,y:bob2.body.position.y},{x:416,y:100});
	rope3=new Rope(bob3.body,roof,{x:bob3.body.position.x,y:bob3.body.position.y},{x:448,y:100});
	rope4=new Rope(bob4.body,roof,{x:bob4.body.position.x,y:bob4.body.position.y},{x:480,y:100});
	rope5=new Rope(bob5.body,roof,{x:bob5.body.position.x,y:bob5.body.position.y},{x:512,y:100});


	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,190,20);

  //call display() to show ropes here
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

  keyPressed();

  

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45}); } 
} 
