var cellsSize;
var cellsX, cellsY;
var dMap;
let mX, mY;
var gameObjects = [];
let selectedObject = null;

function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent("Canvas");
    cnv.position(0, 0);
    createRaster();
}

function draw() {
    background(2);

    for (let y = 0; y < dMap.length; y++) {
        for (let x = 0; x < dMap[y].length; x++) {
            if(dMap[y][x] > 0) {
                if        (dMap[y][x] == 1) {
                    stroke(0);
                    fill(150);
                } else if (dMap[y][x] == 2) {
                    stroke(100,100,255);
                    fill(0,0,255);
                } else if (dMap[y][x] == 3) {
                    stroke(255,100,100);
                    fill(255,50,50);
                }
                rect(x * cellsSize, y * cellsSize, cellsSize, cellsSize);
            }
        }
    }
    stroke(155, 50);
    for (let x = 0; x < width; x += cellsSize) {
        line(x, 0, x, height);
    }
    for (let y = 0; y < height; y += cellsSize) {
        line(0, y, width, y);
    }

    for(let i = 0; i < gameObjects.length; i++) {
        let o = gameObjects[i];
        o.show();
    }

    mX = Math.floor(mouseX / cellsSize) * cellsSize;
    mY = Math.floor(mouseY / cellsSize) * cellsSize;
    fill(0, 0);
    stroke(255, 215, 0);
    rect(mX, mY, cellsSize, cellsSize);
}

function mouseDragged() {
    if(document.getElementById("drawLabel").checked) {
        if(mX < width && mX >= 0 && mY < height && mY >= 0) {
            if     (document.getElementById("basicTiles" ).checked) dMap[mY / cellsSize][mX / cellsSize] = 1;
            else if(document.getElementById("eraseMode"  ).checked) dMap[mY / cellsSize][mX / cellsSize] = 0;
            else if(document.getElementById("waterTiles" ).checked) dMap[mY / cellsSize][mX / cellsSize] = 2;
            else if(document.getElementById("fireTiles"  ).checked) dMap[mY / cellsSize][mX / cellsSize] = 3;
        }
    } else if(document.getElementById("playLabel").checked) {
        if(selectedObject == null) {
            for(let i = 0; i < gameObjects.length; i++) {
                if(gameObjects[i].mouseInside()) {
                    selectedObject = gameObjects[i];
                }
            }
        }
        else {
            selectedObject.setPosition(mX, mY);
        }
    }
}

function mouseReleased() {
    selectedObject = null;
}

function createRaster() {
    cellsSize = parseInt(document.getElementById("cellsSize").value);
    cellsX = Math.ceil((windowWidth - 100) / cellsSize);
    cellsY = Math.ceil(windowHeight / cellsSize);
    dMap = createArray(cellsX, cellsY);
    gameObjects = [];
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function newObject() {
    let name = prompt("Enter a Name");
    var o = new GameObject(name);
}

function createArray(x, y) {
    var a = new Array(y);

    for (var i = 0; i < a.length; i++) {
        a[i] = new Array(x);
        for (var j = 0; j < a[i].length; j++) {
            a[i][j] = 0;
        }
    }

    return a;
}