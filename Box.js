class Box{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        
      }

      score(){
        if(this.Visibility < 0 && this.Visibility>-100){
          Score =  Score + 1;
         }
      }

      display(){
                var pos = this.body.position;
                
                push();
                var angle = this.body.angle;
                translate(pos.x, pos.y);
                imageMode(CENTER);
                rotate(angle);
                image(this.image, 0, 0, this.width, this.height);
                pop();
              
      }
}