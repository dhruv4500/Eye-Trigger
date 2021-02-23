class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.3,
          'friction':0.2,
          'density':4.2
      }
      this.body = Bodies.rectangle(x, y, width, height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("polygon.png");
      this.image2=loadImage("smoke.png");
      World.add(world, this.body);

      this.trajectory=[];
    }
    display(){
      push();
      var pos =this.body.position;
      //rectMode(CENTER);
      imageMode(CENTER);
     // fill();
      image(this.image,pos.x,pos.y,this.width,this.height);
      pop();

     if(this.body.position.x>200&&this.body.velocity.x>3&&gameState==="fly"){
        var position=[this.body.position.x, this.body.position.y];
        this.trajectory.push(position);
        }
    
        for(var i=0;i<this.trajectory.length;i++){
        image(this.image2,this.trajectory[i][0],this.trajectory[i][1]);
        }
    
        //console.log(this.trajectory);
    //  }
    }
  }