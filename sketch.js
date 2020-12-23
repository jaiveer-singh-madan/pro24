const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var groundJ;
var ballj;
var box1;
var world;

function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	groundJ=new Ground(width/2,670,width,20);
	ballj=new Ball(20,625,20);
    
	box=new Needle(1000,640);
		Engine.run(engine);
  
}

  function draw(){
	  background(0);
	  strokeWeight(4);

	  groundJ.display();
	  ballj.display();

	  box.display();
  }


function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ballj.body,ballj.body.position,{x:85,y:-85});
	}
}



