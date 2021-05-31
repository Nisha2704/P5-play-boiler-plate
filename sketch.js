const Engine= Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world
var object

function setup() {
  createCanvas(400,400);

  engine= Engine.create()
  world= engine.world;

  var options = {
    isStatic:true,
    restitution:1.0
  }

object = Bodies.rectangle (200,200,50,50,options)
World.add(world,object)
console.log(object)

ball = Bodies.circle(100,100,20)
World.add(world,ball)
 
}

function draw() {
  background(0); 
  rectMode(CENTER)
  Engine.update(engine)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,40,40)
  rect(object.position.x,object.position.y,50,50)
  
}