class Polygon {
  constructor(x, y, radius) {
    var options = {
       isStatic: false,
       'restitution':0.8,
       'friction':1.0,
       'density':1.0
    }
    this.body = Bodies.circle(50,200, radius, options);
    this.image=loadImage("polygon.png")
    this.radius= radius
    World.add(world, this.body);
   
  }
  display(){
    if (this.body.position.x < 150){
      textSize(20);
      fill("yellow");
      text("Drag the polygon to destroy the blocks",250,30)
    }
    if(this.body.position.x > 200){
      fill(255,140,0);
      textSize(15)
      text("Press space to get a second chance to play!!",520,350)
    }
    ellipseMode(RADIUS);
    imageMode(CENTER)
    image(this.image,this.body.position.x,this.body.position.y,40,40);
  }
};
