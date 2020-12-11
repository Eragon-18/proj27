class Roof {
    constructor(x,y,width,height) {
        var roof_options={
            isStatic: true
        }
        this.body= Bodies.rectangle(x,y,width,height,roof_options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);

    }

    display()
    {
        var pos= this.body.position;
        push()
        rectMode(CENTER)
        fill("white")
        rect(pos.x,pos.y, this.width,this.height)
        pop()
    }
}