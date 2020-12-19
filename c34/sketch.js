
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint=Matter.Constraint;

var roo;
var b1,b2,b3,b4,b5;
var c1,c2,c3,c4,c5;
function preload()
{
	
}

function setup() {
	createCanvas(800,600);

	engine = Engine.create();	
	world = engine.world;

	//Create the Bodies Here.
	
	b1 = new bob(200,100,50,rgb(245,181,23));
	b2 = new bob(300,100,50,rgb(253,117,91));
	b3 = new bob(400,100,50,rgb(7,153,218));
	b4 = new bob(500,100,50,rgb(253,117,91));
	b5 = new bob(600,100,50,rgb(245,181,23));

	c1 = new chain(b1.body,{x:200,y:5});
	c2 = new chain(b2.body,{x:300,y:5});
	c3 = new chain(b3.body,{x:400,y:5});
	c4 = new chain(b4.body,{x:500,y:5});
	c5 = new chain(b5.body,{x:600,y:5});
	
	Engine.run(engine);
  
}


function draw() {
  background(0);
  
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();

  c1.display();
  c2.display();
  c3.display();
  c4.display();
  c5.display();

  drawSprites();
}

function mouseDragged()
{
	Matter.Body.setPosition(b1.body,{x:mouseX,y:mouseY});
}