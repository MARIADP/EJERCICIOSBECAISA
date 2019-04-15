"use strict";
class Rombo {
    calcular() {
        return this.DiagonalHorizontal * this.DiagonalVertical;
    }
    constructor(DiagonalVertical, DiagonalHorizontal) {
        this.DiagonalHorizontal = DiagonalHorizontal;
        this.DiagonalVertical = DiagonalVertical;
    }
}
