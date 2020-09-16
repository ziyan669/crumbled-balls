
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;
    
	//Create the Bodies Here.
	ground=new Ground(600,680,1200,20);
   dustbin1=new Dustbin(1000,660,200,20);
	dustbin2=new Dustbin(1100,660,20,75);
	dustbin3=new Dustbin(900,660,20,75);
	paper=new Paper(50,600,40);
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
 
 
}

function keyPressed(){
   if(keyCode === UP_ARROW){

	Matter.Body.applyForce(paper.body,paper.body.position,{x:80,y:-80})
   }

}



