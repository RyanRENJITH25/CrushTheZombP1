class Base{

    constructor(x,y,w,h,color){

    var options = {

        isStatic: true
}
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color=color;
    this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, options);
    World.add(world,this.body)
}

    display(){
    
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    fill(this.color);
    rect(0,0,this.w,this.h);
    pop();
}
}