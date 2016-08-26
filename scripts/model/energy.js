function Energy(initial) {
    this.value = 0;
    
    if (initial != undefined) {
        this.value = initial;
    }
    
    this.push = function(more) {
        this.value += more;
    }
    
    this.pull = function() {
        var split = {
            up: 0,
            right: 0,
            left: 0,
            down: 0,
            up_right: 0,
            up_left: 0,
            down_right: 0,
            down_left: 0
        }
        
        if (this.value <= 40) {
            return split;
        } 
        
        // Spray upwards
        var ammount = this.value * 0.05;
        split.up += ammount;
        this.valie -= ammount;
        
        if (this.value <= 60) {
            return split;
        }
        
        split.up += ammount;
        split.right += ammount;
        split.left += ammount;
        this.value -= (ammount*3);
        
        if (this.value <= 80) {
            return split;
        }
        
        split.up += ammount * 3;
        split.right += ammount;
        split.left += ammount;
        this.value -= (ammount*5);
        
        if (this.value <= 100) {
            return split;
        }
        
        if (this.value <= 105) {
             
            // Extract until the energy level is 95 (Fast Burn)
            var extracted = this.value -95;
            
            split.up = extracted/3;
            split.left = extracted/3;
            split.right = extracted/3;
            this.value -= extracted;
            
            return split;
        }
        // Over 105, Explode
        else {
            // Extract all except 15
            var extracted = this.value - 15;
            var unit = extracted / 8;
            
            split.up = unit*2;
            split.left = unit*2;
            split.right = unit*2;
            split.up_right = unit;
            split.up_left = unit;
            this.value -= extracted;
            
            return split;
        }
    }
}