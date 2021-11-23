var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
  
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(100,580,200,30);
    block1.shapeColor = "blue";

    block2 = createSprite(300,580,200,30);
    block2.shapeColor = "green";

    block3 = createSprite(500,580,200,30);
    block3.shapeColor = "yellow";

    block4 = createSprite(700,580,200,30);
    block4.shapeColor = "red";


    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = (random(-10,10));
    ball.velocityY = (random(4,10));

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        
    }



    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "green";
        
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "yellow";
        
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "red";
        
    }

   

    drawSprites();
}
