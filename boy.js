class boy{
    constructor(x, y, radius) {
        var options = {
            'restitution':0,
            'friction':3.0,
            'density':3.0
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.width = 2* radius;
        this.height = 2*radius;
        this.image = loadImage("boy.gif");
        World.add(world, this.body);
      }
      display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
      }
}