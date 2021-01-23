
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var ground;
var stone;
var boy,boyIMG;
var mango;
var tree,treeIMG;
var gameState="onChain";


function preload()
{
	boyIMG=loadImage("boy.jpg")
	treeIMG=loadImage("tree.jpg")
	

}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(2000,400);

	boy=createSprite(250,280,10,10);
	boy.addImage(boyIMG);
	
	stone = new Stone(600,200,50,50);
	chain = new Chain(stone.body,{x:190,y:180});
	tree=createSprite(900,200,70,70);
	tree.addImage(treeIMG);
	tree.scale=1.5;
	mango1 = new Mango(790,120);
	mango2 = new Mango(880,120);
	mango3 = new Mango(1000,120);
	mango4 = new Mango(880,180);
	mango5 = new Mango(880,60);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

   
  
   ground.display();
   
   boy.display();
  
  
   chain.display();
   tree.display();
  
  
  drawSprites();
  stone.display();
  

  dectectollision(stone,mango1);
  dectectollision(stone,mango2);
  dectectollision(stone,mango3);
  dectectollision(stone,mango4);
  dectectollision(stone,mango5);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();


}



function mouseDragged(){
    if(gameState!="launched"){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
	}
	}


	function mouseReleased(){
chain.fly();

gameSate="launched";
	
	}
	function dectectollision(Lstone,Lmango){ 
	mangoBodyPosition=Lmango.body.Position;
	stoneBodyPosition=Lstone.body.position;	
	
	var distance=dist(LmangoBodyPosition.x,LmangoBodyPosition.y,stoneBodyPosition.x,stoneBodyPosition.y)
     if(distance<=mango.r+stone.r){

		Matter.Body.setStatic(Lmango.body,false);
	 }
	}


