var i1, i2;

function solution(){
    /*
        sortare input
    */
    
    /*
        gasesc dreptele de legatura
    */
    i1 = getPointSt(polygon1, polygon2);
    i2 = getPointDr(polygon1, polygon2);
    
    /*
        adauga puncte
    */
    var len = 0;
    points = [];
    for(var i = i2.start[0]; i <= i1.start[0]; i++){
        points[len] = polygon1[i];
        len++;
    }
    
    for(var i = i1.start[1]; i < polygon2.length; i++){
        points[len] = polygon2[i];
        len++;
    }
    for(var i = 0; i <= i2.start[1]; i++){
        points[len] = polygon2[i];
        len++;
    }
}

function getPointSt(p1, p2){
    var index = {
        a: p1[0],
        b: p2[0],
        start: [0, 0]
    };
    var ok = true;
    for(var i = 0; i < p1.length; i++){
        for(var j = 0; j < p2.length; j++){
            ok = true;
            for(var k = 0; k < p1.length; k++){
                if(k != i){
                    if(delta(p1[i], p2[j], p1[k]) < 0){
                        ok = false;
                        break;
                    }
                }
            }
            if(!ok)
                continue;
            
            for(var k = 0; k < p2.length; k++){
                if(k != j){
                    if(delta(p1[i], p2[j], p2[k]) < 0){
                        ok = false;
                        break;
                    }
                }
            }
            
            if(ok){
                index.a = p1[i];
                index.b = p2[j];
                index.start = [i, j];
            }
        }
    }
    return index;
}

function getPointDr(p1, p2){
    var index = {
        a: p1[0],
        b: p2[0],
        start: [0, 0]
    };
    var ok = true;
    for(var i = 0; i < p1.length; i++){
        for(var j = 0; j < p2.length; j++){
            ok = true;
            for(var k = 0; k < p1.length; k++){
                if(k != i){
                    if(delta(p1[i], p2[j], p1[k]) > 0){
                        ok = false;
                        break;
                    }
                }
            }
            if(!ok)
                continue;
            
            for(var k = 0; k < p2.length; k++){
                if(k != j){
                    if(delta(p1[i], p2[j], p2[k]) > 0){
                        ok = false;
                        break;
                    }
                }
            }
            
            if(ok){
                index.a = p1[i];
                index.b = p2[j];
                index.start = [i, j];
            }
        }
    }
    return index;
}