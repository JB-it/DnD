var cellsSize;
var cellsX, cellsY;
var dMap;
let mX, mY;

function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent("Canvas");
    cnv.position(0, 0);
    createRaster();
}

function draw() {
    background(2);

    stroke(0, 0);
    fill(15);
    for (let y = 0; y < dMap.length; y++) {
        for (let x = 0; x < dMap[y].length; x++) {
            if (dMap[y][x] == 1) {
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

    mX = Math.floor(mouseX / cellsSize) * cellsSize;
    mY = Math.floor(mouseY / cellsSize) * cellsSize;
    fill(0, 0);
    stroke(255, 215, 0);
    rect(mX, mY, cellsSize, cellsSize);
}

function mouseDragged() {
    dMap[mY / cellsSize][mX / cellsSize] = 1;
}

function createRaster() {
    cellsSize = parseInt(document.getElementById("cellsSize").value);
    cellsX = Math.ceil((windowWidth - 100) / cellsSize);
    cellsY = Math.ceil(windowHeight / cellsSize);
    dMap = createArray(cellsX, cellsY);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
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