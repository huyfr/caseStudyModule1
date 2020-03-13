function Paddle()
{
    this.width=WIDTH_PADDLE;
    this.height=HEIGHT_PADDLE;
    this.x=X_PADDLE;
    this.y=Y_PADDLE;
    this.speed=SPEED;
    this.color=getRandomColor();
    this.isRight=false;
    this.isLeft=false;

    this.drawPaddle=function ()
    {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle=this.color;
        ctx.fill();
        ctx.closePath();
    };

    this.moveLeft=function ()
    {
        if (this.isLeft)
        {
            this.x=this.x-this.speed;
        }
    };

    this.moveRight=function ()
    {
        if (this.isRight)
        {
            this.x=this.x+this.speed;
        }
    };

    this.movePaddle=function ()
    {
        this.moveLeft();
        this.moveRight();

        if (this.x<0)
        {
            this.x=0;       //Nếu tọa độ x<0 thì set x=0 (Trường hợp cạnh bên trái)
        }
        else
        {
            if (this.x>canvas.width-this.width)
            {
                this.x=canvas.width-this.width;     //Nếu tọa độ x > giới hạn bên phải thì set x=canvas.width-this.width=500-width paddle nhập vào (Trường hợp cạnh bên phải)
            }
        }
    };
}