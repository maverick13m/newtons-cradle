class Bob {
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:0.1,
            friction:0,
            frictionair:0.0
            slope:1,
            inertia:Infinity,
            density:1.2
        }; 
        this.x=x;
        this.y=y;
        this.r=r; 
        this.body = Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world, this.body);
    };
    display() { 
        var Bobpos = this.body.position;
        push();
        translate(Bobpos.x, Bobpos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill(255,0,255) ;
        ellipse(0,0,this.r,this.r);
        pop()

    }
}