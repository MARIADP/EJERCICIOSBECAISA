class Rombo {
     public DiagonalVertical: number;
     public DiagonalHorizontal: number;

     calcular():number{
          return this.DiagonalHorizontal*this.DiagonalVertical;
     }

     constructor(DiagonalVertical: number,DiagonalHorizontal: number ){
          this.DiagonalHorizontal=DiagonalHorizontal;
          this.DiagonalVertical=DiagonalVertical;
     }
}




