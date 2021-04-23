const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var ball, slingshot,score;

var gameState = "onSling";

function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
    getTime();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
   // platform = new Ground(150, 305, 300, 170);
   stand1= new Ground(390,300,300,10);
   stand2= new Ground(800,200,300,10);

    box1 = new Box(390,265,70,70);
    box2 = new Box(320,265,70,70);
    
    box3 = new Box(250,265,70,70);
    box4 = new Box(460,265,70,70);

    box5 = new Box(390,195,70,70);
    box6 = new Box(320,195,70,70);
    
    box7 = new Box(460,195,70,70);
    box8 = new Box(390,125,70,70);

    box9 = new Box(800,165,70,70);
    box10 = new Box(870,165,70,70);
    
    box11 = new Box(730,165,70,70);
    box12 = new Box(660,165,70,70);

    box13 = new Box(800,130,70,70);
    box14 = new Box(870,130,70,70);
    
    box15 = new Box(730,130,70,70);
    box16 = new Box(800,95,70,70);



    
  
   
    //ball = new Ball(200,50);
     ball=Bodies.circle(50,200,50);
     World.add(world,ball);
    
    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(this.ball,{x:100, y:200});
    
    score=0;
}

function draw(){
   // background(backgroundImg);
   background("black");
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    stand1.display();
    stand2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    fill("red");
    ellipseMode(CENTER);
    ellipse(ball.position.x,ball.position.y,50,50);
   // ball.display();
       //log6.display();
    slingshot.display();  
    
    textSize(25);
    text("Score:"+score,800,50);
    
    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.ball);
    }
}

async function getTime(){

  var response=await  fetch("http://worldclockapi.com/api/json/est/now");
  console.log(response);
  var responseJSON=await response.json();
  console.log(responseJSON);
  
  var datetime=responseJSON.currentDateTime;
  console.log(datetime);
  var hour=datetime.slice(11,13);
  console.log(hour);

  if(hour>=06 && hour<=19){
  
  //bg="sprites/bg.png";
  console.log("daytime");

  }else{

  //bg="sprites/bg2.jpg";   
  console.log("nightime");

  }

 // backgroundImg=loadImage(bg);

}