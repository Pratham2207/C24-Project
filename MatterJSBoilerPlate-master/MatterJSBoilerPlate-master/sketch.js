
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dustbin1,dustbin2,dustbin3;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Dustbin(width/2,height-20,width,20);
	dustbin1 = new Dustbin(650,635,25,75);
	dustbin2 = new Dustbin(560,655,150,25);
	dustbin3 = new Dustbin(480,635,25,75);
	ball = new Ball(50,300,25);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  dustbin1.display();
  dustbin2.display(); 
  dustbin3.display();
  ball.display(); 
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:85})
		console.log('starting over');
	}
}



