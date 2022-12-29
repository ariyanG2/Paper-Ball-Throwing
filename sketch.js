var ball;
var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    ground=new g(widthh/2670, width,20);
	ground=new ground (1100, 600, 20, 120)


	var ball_options={
		isStatic: false,
		restitution:0.3,
		friction:0,
		density:1.2
	
	function keyPressed(){
		if (keyCode === UP_ARROW) {

		}
	}
	
	}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  Ground.display();
}



