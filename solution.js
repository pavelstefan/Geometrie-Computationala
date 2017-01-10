var i1, i2;

function solution(){
    /*
        sortare input
    */
    
    if(polygon1.length == polygon2.length){
        var ok = true;
        for(var i = 0; i < polygon1.length; i++){
            if(polygon1[i] != polygon2[i]){
                ok = false;
                break;
            }
        }
        if(ok){
            points = polygon2;
            return;
        }
    }
    
    var dif = prepareSort();
    for(var i = 0; i < polygon1.length; i++){
        for(var j = i + 1; j < polygon1.length; j++){
            if(comapare(polygon1[i], polygon1[j]) > 0){
                var x = polygon1[i];
                polygon1[i] = polygon1[j];
                polygon1[j] = x;
            }
        }
    }
    
    for(var i = 0; i < polygon2.length; i++){
        for(var j = i + 1; j < polygon2.length; j++){
            if(comapare(polygon2[i], polygon2[j]) > 0){
                var x = polygon2[i];
                polygon2[i] = polygon2[j];
                polygon2[j] = x;
            }
        }
    }
    abc({x: -dif.p1.x, y: -dif.p1.y}, {x: -dif.p2.x, y: -dif.p2.y});
    
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