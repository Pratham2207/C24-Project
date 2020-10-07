var ground,paperObject;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	


	engine = Engine.create();
	world = engine.world;




	//Create the Bodies Here.
	
	 paperObject = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true, density:1.2, friction:0.5});
	 World.add(world, paperObject);

	 ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85});
		Matter.Body.setStatic(packageBody, false);

	}
}


