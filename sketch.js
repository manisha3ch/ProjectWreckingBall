
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hook, mBob;
var rp;
var roofImage;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;

function preload(){
  roofImage = loadImage("image/roof1.png");
}
function setup() {
	createCanvas(3000, 800);

	// Create Our Engine and Our World
	myEngine = Engine.create();
	myWorld = myEngine.world;

	//Create a hook/holder of the crane
  hook = new Ground(width/15, height-790,width/5,height/10,0);
  
	//Create a ground
	ground = new Ground(width/2, height-10,width,height/10,1);

	//Create a ball
  mBob = new Bob(width/8, height/4,45);
  
  // create the rope
  rp = new Rope(mBob.body,{x:480,y:50});

  var options = {
    isStatic:false,
    restitution:0.8,
    friction:1.0,
    density:0.4,
}

roof0 = Bodies.polygon(900, 100, 3,40,options)
Body.setAngle(roof0,PI/2)

roof1 = Bodies.polygon(800, 100, 3,40,options)
Body.setAngle(roof1,PI/2)

roof2 = Bodies.polygon(700, 100, 3,40,options)
Body.setAngle(roof2,PI/2)

World.add(myWorld,[roof0,roof1,roof2]);
//console.log(roof0);
//console.log(roof0.angle)


    box1=new Box(900,100,70,70);
    box2=new Box(900,100,70,70);
    box3=new Box(900,100,70,70);
    box4=new Box(900,100,70,70);
    box5=new Box(900,100,70,70);
    box6=new Box(900,100,70,70);
    box7=new Box(800,100,70,70);
    box8=new Box(800,100,70,70);
    box9=new Box(800,100,70,70);
    box10=new Box(800,100,70,70);
    box11=new Box(800,100,70,70);
    box12=new Box(800,100,70,70);
    box13=new Box(700,100,70,70);
    box14=new Box(700,100,70,70);
    box15=new Box(700,100,70,70);
    box16=new Box(700,100,70,70);
    box17=new Box(700,100,70,70);
    box18=new Box(700,100,70,70);
    box19=new Box(700,100,70,70);
    box20=new Box(700,100,70,70);


	/*var render = Render.create({
		element: document.body,
		engine: myEngine,
		options: {
		  width: 3000,
		  height: 800,
		  wireframes: false
		}
	  });
	Render.run(render);*/

	Engine.run(myEngine);
}

function draw() {

  background(255);

  // display the ball
  mBob.display();

  // display the hook/platform of crane
  hook.display();

  // display the ground
  ground.display();

  // display the rope / chain
  rp.display();

  // display the building floors
  box1.display();
  box2.display();
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
  box17.display();
  box18.display();
  box19.display();
  box20.display();


    // Display the roof of the building 
    triangle(this.roof2.position.x-40,this.roof2.position.y+20, this.roof2.position.x, this.roof2.position.y-40, this.roof2.position.x+40, this.roof2.position.y+20)
    fill('#216543');
    quad(this.roof1.position.x-40,this.roof1.position.y+20, this.roof1.position.x-20, this.roof1.position.y-20,this.roof1.position.x+20, this.roof1.position.y-20, this.roof1.position.x+40, this.roof1.position.y+20);
    console.log(this.roof0.position);
    //push();
    //translate(this.roof0.position.x-40,this.roof0.position.y-58);
    //rotate(this.roof0.angle);
    //image(roofImage,0,0,80,80);
    image(roofImage,this.roof0.position.x-40,this.roof0.position.y-58,80,80);
    //pop();
  
}

function mouseDragged(){
   Matter.Body.setPosition(mBob.body,{x:mouseY,y:mouseY});
}








