var backgroundImage
var birdImage;
var bird
var coinImage;
var pipeBottomImage;
var pipeTopImage;
var pipeBottom;
var pipeTop;


function preload(){
    backgroundImage = loadImage("Images/background1.png");
    coinImage = loadImage("Images/coin.png");
    pipeBottomImage = loadImage("Images/pipes1.png");
    pipeTopImage = loadImage("Images/pipes2top.png");
    birdImage = loadAnimation("Images/bird1.png", "Images/bird2.png", "Images/bird3.png", "Images/bird4.png");

}
function setup(){
    createCanvas(1400,550)
}
function draw(){
    background(backgroundImage);
    spawningPipesTop();
    spawningPipesBottom();
    bird = createSprite(100,220,100,100);
    bird.addAnimation("bird", birdImage);
    bird.scale= 0.5



    drawSprites()
}

function spawningPipesTop(){
    if(frameCount%150 == 0){
        position = [10,30,50,70]
        pipeTop = createSprite(1400, random(position),100,100);
        pipeTop.velocityX = -4
        pipeTop.addImage(pipeTopImage)
    }

}
function spawningPipesBottom(){
    if(frameCount%200 == 0){
        position = [490, 470, 450, 430 ]
        pipeBottom = createSprite(1400, random(position),100,100);
        pipeBottom.velocityX = -4  
        pipeBottom.addImage(pipeBottomImage)
    }
}

