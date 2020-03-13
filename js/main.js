let canvas=document.getElementById("myCanvas");
let ctx=canvas.getContext("2d");
let startGame;
let arr=[];
let scores=DEFAULT_SCORE;
let red, blue, green;

let ball= new Ball();
ball.drawBall();

let paddle = new Paddle();
paddle.drawPaddle();

let bricks=new Brick();
bricks.xyCoordinate();
bricks.drawBricks(bricks);

let text=new Text();

window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);

function getRandomColor()
{
    red=Math.floor(Math.random()*255);
    blue=Math.floor(Math.random()*255);
    green=Math.floor(Math.random()*255);
    return "rgb("+red+","+blue+","+green+")";
}

function onKeyUp(e)
{
    switch (e.which)
    {
        case KEY_LEFT:
            paddle.isLeft=false;
            break;
        case KEY_RIGHT:
            paddle.isRight=false;
            break;
    }
}

function onKeyDown(e)
{
    switch (e.which)
    {
        case KEY_LEFT:
            paddle.isLeft=true;
            break;
        case KEY_RIGHT:
            paddle.isRight=true;
            break;
    }
}

function gameOver()
{
    if (ball.y>canvas.height-ball.radius)
    {
        clearInterval(startGame);
        text.showGameOver(ctx);
    }
}

function gameWin()
{
    document.getElementById("result").innerHTML=scores;
    if (scores>=40)
    {
        clearInterval(startGame);
        text.showWin(ctx);
    }
}

function gameStart()
{
    startGame=setInterval(function ()
    {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ball.drawBall();
        paddle.drawPaddle();
        ball.moveBall(paddle);
        paddle.movePaddle();
        bricks.drawBricks(bricks);
        bricks.ballImpactBricks(ball, bricks);
        gameOver();
        gameWin();
    }, 1);
}

function start()
{
    gameStart();
}

function reset()
{
    window.location.reload();
}