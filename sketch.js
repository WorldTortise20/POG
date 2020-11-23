
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;
var tI,tree;
var kid, kidI;


function setup() {
	createCanvas(1000, 700);
	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.

ground  = new Ground(width/2,690,width,30);
stone = new Stone(100,100,20);
s = new No (stone.body, {x:100, y:570});
tree = new Tree(700,700); 
mango1 = new Mango(500,300,19);
mango2 = new Mango(651,273,19);
mango3 = new Mango(600,300,19);
mango4 = new Mango(700,254,19);
mango5 = new Mango(600,400,19);
mango6 = new Mango(900,300,19);
mango7 = new Mango(800,370,19);
k = new Boy (150,620)


	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
   
  tree.display();
  stone.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  s.display();
  k.display();


  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
	}
	
function mouseReleased(){
		 s.yeet();
	}

  function detectCollision(lstone,lmango){
    stoneBodyPosition = lstone.body.position;
    mangoBodyPosition = lmango.body.position;
  
    var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
    if(distance <= lmango.r + lstone.r){
      Matter.Body.setStatic(lmango.body, false);
    }
  
  }
  
function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(stone.body, {x: 100,y: 570})
		s.attach(stone.body);
	}
}
