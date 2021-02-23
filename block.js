class Block {
    constructor(x, y, width, height,colour) {
      var options = {
          restitution:0.5,
          friction:0.5,
          density:0.4,
          isStatic:false
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.colour=colour;
      this.visibility=255;
      
      World.add(world, this.body);
    }
    display(){

      if(this.body.speed<10){
        push();
      var pos =this.body.position;
      //rectMode(CENTER);
      rectMode(CENTER);
      stroke(0);
      strokeWeight(1);
      fill(this.colour);
      rect(pos.x,pos.y,this.width,this.height);
      pop();
    }
  else {
    push();
    this.visibility-=5;
    tint(255,this.visibility);
    World.remove(world,this.body);
  pop();  
  }
  if(this.visibility<0&&this.visibility>-1005){
    score++;
  }
  }
  
}
