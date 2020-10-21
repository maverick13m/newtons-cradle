class roof {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,200,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      push()
      translate(pos.x, pos.y)
      rectMode(CENTER);
      fill("gray");
      rect( 0 , 0 , this.width, this.height);
      pop ()
    }
  };