let myXPos = 60;
let myYPos = 250;
let ballXPos = 170;
let ballYPos = 250;
let goalXPos = 975;
let goalYPos = 250;

let myLeft, myRight, myTop, myBottom;
let ballLeft, ballRight, ballTop, ballBottom;
let goalLeft, goalRight, goalTop, goalBottom;

let points = 0;

let enemyArray = [];

function setup() {
    createCanvas(1000, 500);
     
    for (let i = 0; i < 5; i++) {
        let temp = new Enemy(1000, random(0, 500), 0, 255, 0, 2);
        enemyArray.push(temp);
    } 

    rectMode(CENTER);
}


function draw() {
    background(0, 0, 0);
 
    fill(255, 255, 255);
    textSize(22);
    text("Score: " + points, 30, 30);

    fill(255, 0, 0);
    rect(myXPos, myYPos, 100, 100);

    fill(0, 255, 0);
    rect(ballXPos, ballYPos, 50, 50);

    fill(255, 255, 255);
    rect(goalXPos, goalYPos, 30, 150);

     
    if (keyIsDown(LEFT_ARROW)) {
        myXPos -= 2;
    }

    if (keyIsDown(RIGHT_ARROW)) {
         myXPos += 2;
    }

    if (keyIsDown(UP_ARROW)) {
        myYPos -= 2;
    }

    if (keyIsDown(DOWN_ARROW)) {
        myYPos += 2;
    }

    myLeft = myXPos - 50;
    myRight = myXPos + 50;
    myTop = myYPos - 50;
    myBottom = myYPos + 50;

    ballLeft = ballXPos - 25;
    ballRight = ballXPos + 25;
    ballTop = ballYPos - 25;
    ballBottom = ballYPos + 25;

    goalLeft = goalXPos - 15;
    goalRight = goalXPos + 15;
    goalTop = goalYPos - 75;
    goalBottom = goalYPos + 75;

    for (let i = 0; i < enemyArray.length; i++) {
        fill(enemyArray[i].redValue, enemyArray[i].greenValue, enemyArray[i].blueValue);
        rect(enemyArray[i].xPos, enemyArray[i].yPos, 50, 50);
  
        enemyArray[i].xPos -= enemyArray[i].speedValue;
  
        if (enemyArray[i].xPos < -25) {
            enemyArray[i].xPos = 1000;
        }
    }
    
    if (myLeft > ballRight || myRight < ballLeft || myTop > ballBottom || myBottom < ballTop) {
 
    }
  
    else {
        ballXPos = myXPos + 100;
        ballYPos = myYPos;

        points += 25;
    }

    if(ballXPos > 1000) {
        ballXPos = 170;
    }

    if(ballLeft > goalRight || ballRight < goalLeft || ballTop > goalBottom || ballBottom < goalTop) {

    }

    else {
        background(0, 0, 0)

        fill(255, 255, 255);
        textSize(50);
        text("YOU WIN!", 300, 250);
        text("FINAL SCORE: " + points, 300, 300);
    }

}


class Enemy {
    constructor(x, y, r, g, b, speed) {
        this.xPos = x;
        this.yPos = y;
        this.redValue = r;
        this.greenValue = g;
        this.blueValue = b;
        this.speedValue = speed;
    }
 }
 


