class Ball
{
    constructor(x,y,r){
    var opTians={
        restitution:0.3,
        friction:0.5,
        isStatic:false,
        density:1.2
    } 
    this.x=x;
    this.y=y;
    this.radius=r;
    this.body=Bodies.circle(x,y,r,opTians);
    World.add(world,this.body);
}
   display(){
       var ballPos=this.body.position;
       push()
       translate(ballPos.x,ballPos.y);
       strokeWeight(4);
       fill("purple");
       ellipse(0,0,this.r,this.r);
       pop()
   }
}