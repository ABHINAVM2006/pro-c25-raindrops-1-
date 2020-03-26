class drops{
    constructor(x,y,w,h)    {
        this.body = Bodies.rectangle(x,y,w,h);
        this.w = 10;
        this.height = 70;
        World.add(world,this.body);
        this.image = loadImage("raindrop.png");
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(pos.x, pos.y, this.w,this.h);
      
      }
}