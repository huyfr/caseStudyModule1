function Text()
{
    this.showGameOver=function (ctx)
    {
        ctx.fillStyle=getRandomColor();
        ctx.font=("30px Arial");
        ctx.fillText("GAME OVER!", canvas.width/2.5, canvas.height/2);
        ctx.fillText("Press f5 or RESET to restart", canvas.width/3.4, canvas.height/2+50);
    };

    this.showWin=function (ctx)
    {
        ctx.fillStyle=getRandomColor();
        ctx.font=("50px Arial");
        ctx.textAlign="center";
        ctx.fillText("WIN", canvas.width/2, canvas.height/2);
    };
}