var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;

var dx = 2;
var dy = -2;
var ballRadius = 10;

var paddleHeight = 10;
var paddleWidth = 105;
var paddleX = (canvas.width-paddleWidth)/2;

var rightPressed = false;
var leftPressed = false;


// Variables defining the bricks
var brickRowCount = 11; /*5*/
var brickColumnCount = 4; /*9*/
var brickWidth = 45; /*75*/
var brickHeight = 10; /*20*/
var brickPadding = 10; /*10*/
var brickOffsetTop = 30; /*30*/
var brickOffsetLeft = 30; /*30*/


// Score variables

var score = 0;


//Player Lives

var lives = 4;


// function myFunction(x) {
//     if (x.matches) { // If media query matches
    
       


//     }
// }
// var x = window.matchMedia("(max-width: 528px)")
// myFunction(x) // Call listener function at run time
// x.addListener(myFunction) // Attach listener function on state changes


//Using a for loop, we define c to contain the number of columns
//and r to contain the rows of the bricks

var bricks = [];
for(c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(r=0; r<brickRowCount; r++) {
        bricks[c][r] = {x: 0, y: 0, status: 1};
    }
}


function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();

}


function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}



// Draw bricks and use them

function drawBricks() {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
            if(bricks[c][r].status == 1) {
            var brickX = (r*(brickWidth+brickPadding)) + brickOffsetLeft;
            var brickY = (c*(brickHeight+brickPadding)) + brickOffsetTop;

            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = "#34495E";
            ctx.fill();
            ctx.closePath();
            }    
        }
    }
}


//Draw score and show it on the screen

function drawScore() {
    ctx.font = "12px Arial";
    ctx.fillStyle = "#17202A";
    ctx.fillText("Score: " + score, 8, 15);
}

//Draw Lives function

function drawLives() {
    ctx.font = "12px Arial";
    ctx.fillStyle = "#17202A";
    ctx.fillText("Lives: " + lives, canvas.width-65, 15);
}


//Detect ball collision with each block

function collisionDetection() {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status == 1) {
            if(x > b.x && x < b.x+brickWidth && y > b.y && y <b.y+brickHeight){
                dy = -dy;
                b.status = 0;
                score++;

                if(score == brickRowCount*brickColumnCount) {
                    alert(" CONGRATULATIONS!" + " " + "Your score is: " + " " + score);
                    document.location.reload();
                    }
                 }
            }
        }
    }
}






function draw() {

    ctx.clearRect(0,0, canvas.width, canvas.height);

    drawBricks();
    drawBall();
    drawPaddle();
    drawScore();
    drawLives();
    collisionDetection();
    

    

    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }

    if(y + dy < ballRadius) {
        dy = -dy;
    }

    // Makes the ball bounce on the bar

    else if (y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }

        else {
            lives--;
            if(!lives) {
                alert("GAME OVER");
                document.location.reload();
            }

        else{
            x = canvas.width/2;
            y = canvas.height-30;
            dx = 3;
            dy = -3;
            paddleX = (canvas.width-paddleWidth)/2;
            }
        }    
        
    }

    


    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
    }

    x += dx;
    y += dy;

    requestAnimationFrame(draw);

}

draw();

// event listeners


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHnadler, false);

document.addEventListener("touchleft", touchmoveleft, false);


function touchmoveleft(){
    // if( paddleX < canvas.width-paddleWidth) {
    //     paddleX += 7;
    // }
     if ( paddleX > 0) {
        paddleX -= 7;
    }

    x += dx;
    y += dy;
}


//Key Up - When key is not pressed

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }

    else if(e.keyCode == 37) {
        leftPressed = true;
    }

}

//Key Down - When Key is pressed

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }

    else if(e.keyCode == 37) {
        leftPressed = false;
    }

}


//Moving Mouse 

function mouseMoveHnadler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth/2;
    }
}




draw();
