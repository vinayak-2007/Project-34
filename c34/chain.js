class chain 
{
    constructor(BodyA,BodyB)
    {
         var properties={bodyA:BodyA,pointB:BodyB,stiffness:0.01,length:500}
         this.chain=constraint.create(properties);

         World.add(world,this.chain);
    }
    display()
    {
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.pointB;

        stroke ("white");
        line (pointA.x,pointA.y,pointB.x,pointB.y);
    }
}