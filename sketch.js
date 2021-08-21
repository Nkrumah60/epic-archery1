const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var comBase
var playerBase
var player
var comPlayer


function setup() {
  canvas = createCanvas(1200,600);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object

  comBase = new ComputerBase(1000,400,250,250);
  playerBase = new Playerbase(200,400,250,250);
  player = new Player(200,220,100,175);
  comPlayer = new ComputerPlayer(1000,220,100,175);
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  comBase.display();
  playerBase.display();
  player.display();
  comPlayer.display();
   //Display Playerbase and computer base 


   //display Player and computerplayer


}
