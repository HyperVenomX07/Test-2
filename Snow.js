class Snow{
    constructor(x, y,width,height) {
        var options = {
            frictionAir:1.0,
            density:1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = width;
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,this.body.x,this.body.y,this.width,this.height);
        pop();
      }
}