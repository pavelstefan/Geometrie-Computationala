function drawPoints(p){
    for(var i = 0; i < p.length - 1; i++){
        line(center.x + p[i].x, center.y - p[i].y, center.x + p[i + 1].x, center.y - p[i + 1].y);
    }
    
    line(center.x + p[0].x, center.y - p[0].y, center.x + p[p.length - 1].x, center.y - p[p.length - 1].y);
}

function drawCoordSystem(){
    stroke(255, 0, 0);
    line(0, window.innerHeight / 2, window.innerWidth, window.innerHeight / 2);
    line(window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight);
    stroke(0);
}

function comapare(p1, p2){
    var a1 = Math.atan2(p1.x, p1.y),
        a2 = Math.atan2(p2.x, p2.y);
    if(a1 > a2)
        return -1;
    if(a1 < a2)
        return 1;
    return 0;
}

function delta(p, q, r){
    var m = math.matrix(
        [
            [1, 1, 1],
            [p.x, q.x, r.x],
            [p.y, q.y, r.y]
        ]
    );
    
    return math.det(m);
}