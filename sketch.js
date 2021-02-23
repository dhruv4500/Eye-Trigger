const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world,constraint,bg, gameState="play";
var ground,base1,base2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11;
var block12,block13,block14,block15,block16,block17,block18,box,slingShot;
var backgroundImg,score;

var score=0;

function setup(){
    createCanvas(1530,700);
    engine=Engine.create();
    world=engine.world;

    ground=new Ground(width/2,690,width,50,"brown");

    base1=new Ground(468,390,200,50,"black");
    base2=new Ground(837,236,200,50,"black");

    block1=new Block(548,322,35,40,"lightblue");
    block2=new Block(508,322,35,40,"lightblue");
    block3=new Block(468,322,35,40,"lightblue");
    block4=new Block(428,322,35,40,"lightblue");
    block5=new Block(388,322,35,40,"lightblue");

    block6=new Block(508,300,35,40,"lightgreen");
    block7=new Block(468,300,35,40,"lightgreen");
    block8=new Block(428,300,35,40,"lightgreen");

    block9=new Block(468,270,35,40,"red");

    block10=new Block(910,194,35,40,"lightblue");
    block11=new Block(875,194,35,40,"lightblue");
    block12=new Block(840,194,35,40,"lightblue");
    block13=new Block(805,194,35,40,"lightblue");
    block14=new Block(770,194,35,40,"lightblue");

    block15=new Block(875,174,35,40,"lightgreen");
    block16=new Block(840,174,35,40,"lightgreen");
    block17=new Block(805,174,35,40,"lightgreen");

    block18=new Block(840,164,35,40,"red");

    box = new Box(210,400,75,75);
    slingShot = new SlingShot(box.body,{x:210,y:350});

    Engine.run(engine);
}

function draw(){
    getBackground();
 
 //   background(0);

    Engine.update(engine);

    ground.display();

    base1.display();
    base2.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();

    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();

    block15.display();
    block16.display();
    block17.display();

    block18.display();

    box.display();
    slingShot.display();

    

    textSize(30);
    text("Press Space for another chance",106,34);
    fill("green");
    text("Score: "+score,1200,54)
 
//    console.log(mouseX+","+mouseY);

}
function mouseDragged(){
    if(gameState==="play")
    Matter.Body.setPosition(box.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
    gameState="fly";
}

function keyPressed(){
	if(keyCode === 32)
	{
		Matter.Body.setPosition(box.body,{x:235, y:420})
		slingShot.attach(box.body);

        gameState="play";
        box.trajectory=[]; 
  }
  
}

async function getBackground(){
    var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON=await response.json();
  
  
    var dateTime=responseJSON.datetime;
  
    var hour=dateTime.slice(11,13);
    console.log(hour);
  
    if(hour>5&&hour<17){
        console.log("day Time");
        background("lightblue");
      }else{
        console.log("night Time");
        background("grey");
      }
  }