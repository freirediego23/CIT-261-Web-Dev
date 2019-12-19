var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var gameStates = { "active": 0, "paused": 1, "win": 2, "gameover": 3 };
Object.freeze(gameStates);

var x = canvas.width/2;
var y = canvas.height-30;

var dx = 3;
var dy = -3;
var ballRadius = 10;

var paddleHeight = 10;
var paddleWidth = 105;
var paddleX = (canvas.width-paddleWidth)/2;


var rightPressed = false;
var leftPressed = false;

var gameState = gameStates.active;
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




//Using a for loop, we define c to contain the number of columns
//and r to contain the rows of the bricks

var bricks = [];
for(c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(r=0; r<brickRowCount; r++) {
        bricks[c][r] = {x: 0, y: 0, status: 1};
    }
}



// event listeners


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHnadler, false);

// document.addEventListener('touchstart', handleTouchEvent, true);
// document.addEventListener('touchmove', handleTouchEvent, true);
// document.addEventListener('touchend', handleTouchEvent, true);
// document.addEventListener('touchcancel', handleTouchEvent, true);
document.addEventListener("touchmove", touchMoveHandler, {passive: false, capture: false});

// will adjust ship's x to latest touch
// function handleTouchEvent(e) {
//     if (e.touches.length === 0 ) return;
//     e.preventDefault();
//     e.stopPropagation();
//     var touch = e.touches[0];
//     paddleX = (touch.pageX - canvas.width)/ 2 
//     //paddleX = (canvas.width-paddleWidth)/2;

//     // if(rightPressed && paddleX < canvas.width-paddleWidth) {
//     //     paddleX += 7;
// }




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

//Mobile devices

// function touchStart() {
//     if(addEventListener("touchstart", touchStart) = true) {
//         paddleX += 7;
//     }
//     x += dx;
//     y += dy;

//     requestAnimationFrame();
// }


//Moving Mouse 

function mouseMoveHnadler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth/2;
    }
}

//testing
function touchMoveHandler(e) {
    if (gameState === gameStates.active) {
        e.preventDefault();

        var touches = e.changedTouches;

        for (var i = 0; i < touches.length; i++) {
            var touch = touches[i];
            movePaddleByClientX(touch.clientX);
        }
    }
}

function movePaddleByClientX(clientX) {
    var relativeX = clientX - canvas.offsetLeft;
    if (relativeX > 0 && (relativeX + (paddleWidth / 2)) < canvas.width) {
        var newX = relativeX - paddleWidth / 2;

        if (newX <= 0) {
            paddleX = touches[i];
        } else if (newX >= canvas.width) {
            paddleX = canvas.width;
        } else {
            paddleX = newX;
        }
    }
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




//Drawing the ball
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();

}

//Drawing the paadle
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



