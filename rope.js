class rope {
    constructor(body1 ,body2, offsetX , offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options ={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX, y:this.offsetY}

        }
        this.rope = Constraint.create(options)
        World.add(world,this.rope)
    }
    display() {
        strokeWeight(6)
        line(this.thread.bodyA.position.x,this.thread.bodyA.position.y,this.thread.bodyB.position.x,this.thread.bodyB.position.y)

        
    }



}




















