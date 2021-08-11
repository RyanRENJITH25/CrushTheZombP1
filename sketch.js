const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var ground,left_wall,right_wall,joint_point;
var bridge;
var joint_link;
var stones=[]



function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  ground = new Base(0,height-10,width*2,20,"cyan")
  left_wall = new Base(300,height/2+50,600,100,"crimson")
  right_wall = new Base(width-300,height/2+50,600,100,"green")
  joint_point = new Base(width-600,height/2+10,40,20,"yellow")
  bridge = new Bridge(15,{x:width/2-400,y:height/2})
  Composite.add(bridge.body,joint_point);
  joint_link = new Link(bridge,joint_point)
  
  for (var i = 0; i <= 8; i++) {
    var x = random(width / 2 -200, width /2 +300);
    var y = random(-10,140);
    var stone = new Stone(x,y, 80 , 80);
    stones.push(stone);
  }
  frameRate(80);

}

function draw() {
  background(51);
  Engine.update(engine);
  ground.display();
  left_wall.display();
  right_wall.display();
  joint_point.display();
  bridge.show();
  for(var stone of stones){
    
    stone.display();

  }}
