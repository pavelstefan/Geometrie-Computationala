function setup(){
    createCanvas(window.innerWidth, window.innerHeight);//create canvas
    solution();//generate the solution
}

function draw(){
    background(255);//set background to white
    drawCoordSystem();//sistem de coordonate
    drawPoints(points);//deseneaza output
}

function windowResized(){
    resizeCanvas(window.innerWidth, window.innerHeight);
}