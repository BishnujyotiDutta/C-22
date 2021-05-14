const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

   ground= Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);
    

    var ball_options ={
        restitution :1.3
    }

   ball= Bodies.circle(200,200,20,ball_options);
    World.add(world,ball);





}

function draw(){
    background("green");
    Engine.update(engine);
    fill("brown");
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    fill("yellow");
    rectMode(CENTER);
    ellipse(ball.position.x,ball.position.y,40,40);
    
    
}
