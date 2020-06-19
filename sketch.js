const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var imgPoly;
var slingshot;
var gc,gc1,gc2,gc3;
var t,b,l,r;
var Score = 0;
var backgroundImg;
var Rvalue = 255;

function preload(){
  imgPoly = loadImage("poly.png"); 
  getBackgroundImg(Rvalue);
}


function setup() {
  engine = Engine.create();
  world = engine.world;
  gc = color  (206,175,175);
  gc1 = color (145,135,135);
  gc2 = color (175,235,175);
  gc3 = color (155,255,255);
  createCanvas(1000,400);
  
  ground1 = new Ground(500,height,width,50);
  ground2 = new Ground(390,300,200,10);
  ground3 = new Ground(700,200,200,10);


  //Level1 Bottom blocks
   box1 = new BottomBox(315,280,25,25);
   box2 = new BottomBox(340,280,25,25);
   box3 = new BottomBox(365,280,25,25);
   box4 = new BottomBox(390,280,25,25);
   box5 = new BottomBox(415,280,25,25);
   box6 = new BottomBox(440,280,25,25);
   box7 = new BottomBox(465,280,25,25);
  
  
   // level2 blocks
   
   box8 = new MiddleBox(340,255,25,25);
   box9 = new MiddleBox(365,255,25,25);
   box10= new MiddleBox(390,255,25,25);
   box11 = new MiddleBox(415,255,25,25);
   box12 = new MiddleBox(440,255,25,25);

 
  // level 3 blocls
   box13 = new Midtop(365,230,25,25);
   box14= new Midtop(390,230,25,25);
   box15 = new Midtop(415,230,25,25);
  

  // level 4 blocks

   box16 = new TopBox(390,205,25,25);


// set2Level1 Boxes

  box21 = new MiddleBox(650,180,25,25);
  box22 = new MiddleBox(675,180,25,25);
  box23= new  MiddleBox(700,180,25,25);
  box24 = new MiddleBox(725,180,25,25);
  box25 = new MiddleBox(750,180,25,25);

  
  // set2Level2 Boxes
  box26 = new Midtop(675,155,25,25);
  box27 = new Midtop(700,155,25,25);
  box28 = new Midtop(725,155,25,25);


  // set2Level3 Boxes

  box29 = new TopBox(700,130,25,25);




  // add polygon
  var options = {
    'restitution':0.8,
    'friction':1.0,
    'density':1.0
     }
  //polygon = Bodies.rectangle(150,230, 25, 25, options);
  polygon = Bodies.rectangle(150,230, 25, 25, options);
  World.add(world, polygon)
 
  launcher = new SlingShot(polygon, {x:150, y:200});
  }







function draw() {
  Engine.update(engine);

  if (backgroundImg){
    background(backgroundImg);
    }
    getBackgroundImg(Rvalue);
   // color = Rvalue;
  
  ground1.display("brown");
  ground2.display("blue");
  ground3.display("blue");
  fill(Rvalue);
  textSize(20);
  text("Drag the Hexagonal stone, and release with aim to hit the blocks", 100,30)
  text("Press SPACE to play again", 750,393);

//Bottom Boxes
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  
 // level1 boxes

 box8.display();
 box9.display();
 box10.display();
 box11.display();
 box12.display();


// level 3
box13.display(gc2);
box14.display(gc2);
box15.display(gc2);

// level4
box16.display(gc3);




// set2Level1 Boxes
 box21.display();
 box22.display();
 box23.display();
 box24.display();
 box25.display();

 
// set2Level2 Boxes

box26.display(gc2);
box27.display(gc2); 
box28.display(gc2);

// set2Level3 Boxes
box29.display(gc3);



// for Dislpaying Score
//color = Rvalue;
fill(Rvalue);
  textSize(20);
  text("SCORE - " + Score, 800,30);
 // text("Return value " +Rvalue, 800 , 50); (why is function not reurning value?)
box1.score();
box2.score();
box3.score();
box4.score();
box5.score();
box6.score();
box7.score();
box8.score();
box9.score();
box10.score();
box11.score();
box12.score();
box13.score();
box14.score();
box15.score();
box16.score();

box21.score();
box22.score();
box23.score();
box24.score();
box25.score();
box26.score();
box27.score();
box28.score();
box29.score();


var pPos = polygon.position;
push();
translate(pPos.x, pPos.y);
//rotate (polygon.angle);
imageMode(CENTER)
//image(imgPoly, 0, 0, polygon.width, polygon.height);
image(imgPoly, 0, 0, 25,25);

pop();

launcher.display();
}

function mouseDragged (){
  Matter.Body.setPosition (polygon, {x: mouseX, y: mouseY});
}


function mouseReleased(){
  launcher.fly()
}
  
  function keyPressed(){
    if (keyCode === 32){
       Matter.Body.setPosition(polygon, {x: 150, y: 230});
       launcher.attach(polygon);
    }
  }

// API Application programing interface

async function getBackgroundImg(Rvalue){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);

  if (hour >= 06 && hour<= 19) {
      bg = "DayImage.png";
      Rvalue = 0;
    //  bg = "NightImage.png";
    //    r = 255;
  }
  else {
     bg = "NightImage.png";
     Rvalue = 255;
    //  bg = "DayImage.png";
    //  r = 0;
  }
  
  backgroundImg = loadImage(bg);
  console.log(r);
  return Rvalue;
}


