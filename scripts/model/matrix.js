function Matrix(width, height) {
    
    // Ctor
    this.width = width;
    this.height = height;
    this.matrix = new Array(width);

    for (var idx = 0; idx < width; idx++) {
        this.matrix[idx] = new Array(height);
        
        for (var idy =0; idy < height; idy++) {
            
            this.matrix[idx][idy] = new Cell();
        }
    }
    
    var that = this;
    
    // add neighbors
    each(function (cell, x, y) {
        cell.neighbors = getNeighbors(x,y, that.matrix)
    }, this);
    
    // Functions
    
    this.duplicate = function() {
        var copy = new Matrix(this.width, this.height);
        
        copy.each(function(cell,x ,y) {
            cell.energy = new Energy(that.matrix[x][y].energy.value)
        });
        
        return copy;
    }
    
    this.each = function(action) {
        each(action, this);
    }
    
    // Envoke a function on each cell with energy
    this.eachEnergeticCell = function(action) {
        each(function(cell, x, y) {
            if(cell.energy.value > 0) {
                action(cell, x, y)
            }
        }, this);
    }
    
    this.eachGround = function (action) {
        
        var y = this.height-1;
        
        for (var x = 0; x < width; x++) {
            action(this.matrix[x][y], x, y)
        }
    }
    
    function getNeighbors(x, y, matrix) {
        var dir = new Direction(0,0);
        var _neighbors = [];
        
        var isUp = y > 0;
        var isDown = y < that.height-1;
        var isLeft = x > 0;
        var isRight = x < that.width-1;
            
        // Up
        if (isUp) {
            _neighbors.push(matrix[x][y+dir.up().y])
        }
        
        // Right
        if (isRight) {
            _neighbors.push(matrix[x+dir.right().x][y])
        }
        
        // Left
        if (isLeft) {
            _neighbors.push(matrix[x+dir.left().x][y])
        }
        
        // Down
        if (isDown) {
            _neighbors.push(matrix[x][y+dir.down().y])
        }
        
        // Up Right
        if (isUp) {
            _neighbors.push(matrix[x][y+dir.up().y])
        }
        
        //  Up Right
        if (isRight && isUp) {
            var delta = dir.right().up();
            _neighbors.push(matrix[x+delta.x][y+delta.y])
        }
        
        //  Up Left
        if (isUp && isLeft) {
            delta = dir.left().up();
            _neighbors.push(matrix[x+delta.x][y+delta.y])
        }
        
        // Down Right
        if (isDown && isRight) {
            delta = dir.right().down();
            _neighbors.push(matrix[x+delta.x][y+delta.y])
        }
        
        // Down Left
        if (isDown && isLeft) {
            delta = dir.left().down();
            _neighbors.push(matrix[x+delta.x][y+delta.y])
        }
        
        return _neighbors;
    }
    
    this.consoleEnergy = function() {
        this.each(function(cell,x,y) {
           if(cell.energy.value > 0) { 
               console.log(x+','+y+':'+cell.energy.value)
           } 
        });
    }
        
    function each(action, context) {
        for (var x = 0; x < context.width; x++) {
            for (var y = 0; y < context.height; y++) {
                action(context.matrix[x][y], x, y);
            }
        }
    }
}

