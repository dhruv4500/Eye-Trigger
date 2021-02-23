class SlingShot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.01
        }
    
        this.chain=Constraint.create(options);
        World.add(world, this.chain);


        this.pointB=pointB;
    }

    display(){
        if(this.chain.bodyA){
            push(); 
     var pointA=this.chain.bodyA.position;
     var pointB=this.pointB;  
     push();
     strokeWeight(5);
     stroke(50,23,8);
     line(pointA.x,pointA.y,pointB.x,pointB.y);
    pop();
        }

    }
    attach(body){
        this.chain.bodyA=body;
    }

    fly(){
        this.chain.bodyA=null;
    }
}
