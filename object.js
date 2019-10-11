class GameObject {
    constructor(name) {
        this.name = name;
        this.positionX = 100;
        this.positionY = 100;
        this.diameter = cellsSize;
        gameObjects.push(this);
    }

    show() {
        fill(255);
        stroke(0);
        ellipse(this.positionX + this.diameter/2, this.positionY + this.diameter/2, this.diameter, this.diameter);
        stroke(255);
        let wordLength = this.name.length * 6;
        let textX = this.positionX + this.diameter/2 - wordLength/2;
        text(this.name, textX, this.positionY + this.diameter, wordLength);
    }

    mouseInside() {
        let dX = this.positionX - mouseX + this.diameter / 2;
        let dY = this.positionY - mouseY + this.diameter / 2;
        let distance = Math.sqrt(dX*dX + dY*dY);
        return distance < this.diameter/2;
    }

    setPosition(posX, posY) {
        this.positionX = posX;
        this.positionY = posY;
    }
}