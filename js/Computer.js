class Computer {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.complife1 = "green";
    this.complife2 = "green";
    this.complife3 = "green";
    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

  

    World.add(world, this.body);
  }

 
  
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
  life(){
    push();
    textSize(20);
    fill("white");
    text("Computer",1150,40);

    fill(this.complife1);
    rect(1080,50,70,30);
    fill(this.complife2);
    rect(1150,50,70,30);
    fill(this.complife3);
    rect(1120,50,70,30);
    pop();
  }
}
