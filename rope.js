class rope
{

constructor(body1,body2,pointA,pointB,offsetX,offsetY)
{

    this.pointB = pointB
    this.pointA = pointA
    this.offsetX=offsetX;
    this.offsetY=offsetY;
    var options =
    {
        bodyA:body1,
        bodyB:body2,
        pointB:{x:this.offsetX, y:this.offsetY},
        //length:200
    }
    
    
        this.chain = Matter.Constraint.create(options);
        World.add(world,this.chain);



}

display()
{
    var pointA = this.chain.bodyA.position;
    var pointB = this.chain.bodyB.position


    var Anchor1X = pointA.x
    var Anchor1Y = pointA.y

    var Anchor2X = pointB.x+this.offsetX
    var Anchor2Y = pointB.y+this.offsetY


    line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);


}




}