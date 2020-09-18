class Ball {
    constructor(x, y, diameter) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, diameter/2, options)
      this.diameter = diameter;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      circle(pos.x,pos.y, this.diameter);
    }
  };