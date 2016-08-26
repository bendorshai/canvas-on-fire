function Cell(energy, neighbors) {
    
    if (energy) {
        this.energy = energy;
    }
    else {
        this.energy = new Energy();
    }
    
    if(neighbors) {
        this.neighbors = neighbors;
    }
    else {
        this.neighbors = [];
    }
    
    // Indexes of neighbors
    this.ofThe = {  // GREATEST! name E`v~~~er
        up: 0,
        right: 1,
        left: 2,
        down: 3,
        up_right: 4,
        up_left: 5,
        down_right: 6,
        down_left: 7
    }
    
    // Pushes energy to neighbor if exists
    // The idx of the neighbor and the value of energy to push
    this.pushEnergyToNeighbor = function(idx, value) {
        if ( this.neighbors[idx]) {
            this.neighbors[idx].energy.push(value);    
        }
    }
}