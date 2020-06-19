var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,grond,ball1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
    World.add(world, packageBody);
	

	
	

	Engine.run(engine);
	one=new Log(700,300,300)
    grond=new Ground(600,480,1200,50)
	ball1=new Ball(300,420,50)
	
}


function draw() {
  rectMode(CENTER);
  background("red");


  
  
  drawSprites();
 one.display()
 grond.display()
 ball1.display()
 


if (keyCode== UP_ARROW){
 Matter.Body.applyForce(ball1.body,ball1.body.position,{x:50,y:-50})
}
if (keyCode== DOWN_ARROW){
	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:50})
   }
   if (keyCode== RIGHT_ARROW){
	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-50})
   }
   if (keyCode== LEFT_ARROW){
	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:0,y:0})
   }

}


