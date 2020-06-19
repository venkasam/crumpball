
    class Log{
        constructor(x,y,height,angle){
          var option={
        'isStatic':true,
     
        
         }
        this.body=Bodies.rectangle(x,y,100,height,option,angle)
        this.height=height
        this.width=200
        this.image=loadImage("dustbingreen.png")
        World.add(world,this.body)
        Matter.Body.setAngle(this.body,angle)
        
        }
        display(){
        
        var angle = this.body.angle;
        push();
              
              
             
              translate(this.body.position.x,this.body.position.y)
              fill("purple");
              imageMode(CENTER);
              image(this.image,0,0,this.width,this.height);
              pop();
        }    
        
        }
        