const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var tree;
var ground;
var boy;
var stone;
var m1,m2,m3,m4,m5,m6,m7;
var launcher;

function preload(){
    boy=loadImage("boy.png");
}

function setup(){

var canvas= createCanvas(1300,600);

engine=Engine.create();
world=engine.world;

tree=new Tree(1050,360,450,500);

ground=new Ground(650,600,1300,20);

stone=new Stone(222,450,30)

m1=new Mango(980,200,30);
m2=new Mango(1000,230,30);
m3=new Mango(1100,250,30);
m4=new Mango(1130,300,30);
m5=new Mango(1150,310,30);
m6=new Mango(1055,320,30);
m7=new Mango(1020,190,30);

launcher=new Launcher(stone.body,{x:240,y:460})


}
function draw(){
background("skyblue");
Engine.update(engine);

image(boy,200,380,200,300);

tree.display();
ground.display();
stone.display();
m1.display();
m2.display();
m3.display();
m4.display();
m5.display();
m6.display();
m7.display();

launcher.display();

detectCollision(stone,m1);
detectCollision(stone,m2);
detectCollision(stone,m3);
detectCollision(stone,m4);
detectCollision(stone,m5);
detectCollision(stone,m6);
detectCollision(stone,m7);
}
function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}

function keyPressed(){
    if(keyCode===32){
        Matter.Body.setPosition(stone.body,{x:235,y:420});
        launcher.attach(stone.body)
    }
}

function detectCollision(istone,imango){
mangobody=imango.body.position
stonebody=istone.body.position
var distance = dist(stonebody.x,stonebody.y,mangobody.x,mangobody.y);
if(distance <=imango.r+istone.r){
    Matter.body.setStatic(imango.body,false);
}
}






























