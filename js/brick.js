arr=[];

function Brick()
{
    this.offSetX=OFF_SET_X;
    this.offSetY=OFF_SET_Y;
    this.marginBetween=MARGIN_BETWEEN;
    this.width=WIDTH_BRICKS;
    this.height=HEIGHT_BRICKS;
    this.totalRows=TOTAL_ROWS;
    this.totalCols=TOTAL_COLS;

    this.xyCoordinate=function () {
        for (let i=0; i<this.totalRows; i++)
        {
            for (let j=0; j<this.totalCols; j++)
            {
                arr.push(
                    {
                        oX: this.offSetX+j*(this.width+this.marginBetween),
                        oY: this.offSetY+i*(this.height+this.marginBetween),
                        statusBricks: true
                    });
            }
        }
    };

    this.drawBricks=function (bricks)
    {
        arr.forEach(function (element)
        {
            if (element.statusBricks)
            {
                ctx.beginPath();
                ctx.rect(element.oX, element.oY,bricks.width, bricks.height);
                ctx.fill();
                ctx.closePath();
            }
        })
    };

    this.ballImpactBricks=function (ball, bricks)
    {
        arr.forEach(function (element)
        {
            if (element.statusBricks)
            {
                if (ball.x >= element.oX &&       //ball va chạm góc trên bên phải
                    ball.x <= element.oX+bricks.width &&      //ball va chạm góc trên bên trái
                    ball.y+ball.radius >= element.oY &&       //ball va chạm góc dưới bên phải
                    ball.y-ball.radius <= element.oY+bricks.height)   //ball va chạm góc dưới bên trái
                {
                    ball.dy=-ball.dy;       //Lúc ball chạm paddle đi lên là -dy => khi chạm bricks ball sẽ thành -(-dy)
                    element.statusBricks=false;
                    scores++;
                }
            }
        });
    };
}