const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var ball, ground;
var world, engine;

function setup() 
{

  var canvas = createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  var options = 
  {
    isStatic : true
  }

  var balloptions = 
  {
    restitution : 1.0
  }

  ground = Bodies.rectangle(400,height,800,20,options);
  World.add(world, ground);  

  ball = Bodies.circle(400,100,10,balloptions);
  World.add(world, ball);
}

function draw() 
{
  background(0);  

  Engine.update(engine);
  
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800, 20);

  ellipseMode(CENTER);
  ellipse(ball.position.x, ball.position.y, 10, 10);
}