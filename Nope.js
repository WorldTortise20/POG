class No {
    constructor(bodyA,point){
        var options={
            bodyA: bodyA,
            pointB: point,
            stiffness: 0.05,
            length: 10
        }
        this.pointB= point;
        this.stop = Constraint.create(options); 
        World.add(world,this.stop);
    }
    yeet(){ 
        this.stop.bodyA= null;
    }

    attach(body){
        this.stop.bodyA = body;
    }
    display(){ 
        if(this.stop.bodyA){
        var pointA= this.stop.bodyA.position;
        var p= this.pointB
        strokeWeight(4);
        line (pointA.x,pointA.y, p.x, p.y);
    }
}
}