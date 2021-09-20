const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var boy, snow;


function preload() {
    backgroundImg = loadImage("snow2.jpg");
    boy=loadImage("character.png")
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    snow= new Snow(250,250,450,450);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    image(boy,800,200,350,350)
    snow.display();
    
}



