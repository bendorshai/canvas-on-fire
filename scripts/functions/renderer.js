function render(matrix) {
    
    var next = new Matrix(matrix.width, matrix.height);

    matrix.each(function(cell, x, y) {
        var pulled = cell.energy.pull();
        
        // Push to the neighbors what we cannot hold any longer
        var target = next.matrix[x][y];
        
        target.pushEnergyToNeighbor(cell.ofThe.right, pulled.right);
        target.pushEnergyToNeighbor(cell.ofThe.up, pulled.up);
        target.pushEnergyToNeighbor(cell.ofThe.left, pulled.left);
        
        // Migration
        target.energy.push(cell.energy.value);
    });
    
    // Return next phase, rendered
    return next;
}