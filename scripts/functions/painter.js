function drawMatrix(ctx, matrix) {
    
    matrix.eachEnergeticCell(function(cell, x, y) {
        ctx.fillStyle = getColorByEnergyValueBitch(cell.energy.value)
        ctx.fillRect(x*PLANCK, y*PLANCK, PLANCK, PLANCK); // planck basicly...
    });
}

function getColorByEnergyValueBitch(value) {
    var to_the_source = "#000000";
    
    if (value <= 20) {
        return to_the_source;
    }
    
    to_the_source = "#700000";
    
    if (value <= 40) {
        return to_the_source;
    }
    
    to_the_source = "c02020";
    
    if (value <= 60) {
        return to_the_source;
    }
    
    to_the_source = "#e0e030";
    
    if (value <= 80) {
        return to_the_source;
    }
    
    to_the_source = "#ffff10";
    
    if (value <= 100) {
        return to_the_source;
    }
    
    to_the_source = "#50f050";
    
    return to_the_source;
}