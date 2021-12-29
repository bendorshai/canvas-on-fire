function seedFuel(matrix) {
    matrix.eachGround(function(cell,x,y) {
        if(Math.random() <= 0.3) {
            cell.energy.push(30*Math.random());
        }
    });
}

// evaporate some of the energy in each cell
function evaporate(matrix) {
    matrix.eachEnergeticCell(function(cell, x, y){
        cell.energy.value -= 3;
        
        if(cell.energy.value < 0) {
            cell.energy.value = 0;
        }
    });
}


// only in b branch