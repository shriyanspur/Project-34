const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var pen;
var position = [];


function setup(){
    createCanvas(1300,600);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    Engine.update(engine);

    if (mouseIsPressed == true) {
        stroke(mouseX, 0, mouseY);
        strokeWeight(12);
        pen = point(mouseX, mouseY);

        //Adding coordinates to an array
        position[pen.x, pen.y];
    }
}



/*canvas{
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
    border: 10px;
  }


/*<script src="BaseClass.js"></script>
<script src="Dot.js"></script>
<script src="Paint.js"></script>*/


//paint.display();
//paint.mousePressed();
/*paint.mouseReleased();*/


/*function mouseDragged(){
    paint.body.position.x = mouseX;
    paint.body.position.y = mouseY;
    Matter.Body.setPosition(paint.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    line(paint.body.position.x, paint.body.position.y, mouseX, mouseY);
}*/


/*function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}*/