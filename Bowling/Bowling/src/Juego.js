/* eslint-disable no-unused-vars */
 export default class Juego{
    constructor() {
        this.puntaje=0;
        this.tiros = [];
    }
     tirar (pinos){
        //this.puntaje=0 //1er Test devuelve cero. En este Test la funcion tirar podría estar vacia
        // this.puntaje=this.puntaje+pinos; //2do Test suma los puntajes, (siempre seria 1)
        this.tiros.push(pinos);
    }

    esSpare(cuadroIndex) {
        return this.tiros[cuadroIndex] + this.tiros[cuadroIndex + 1] === 10;
    }
     score (){
        //return 0 //1er Test devuelve cero
        //return 20 //2do Test devuelve 20 D
        let puntajeTotal = 0;
        let cuadroIndex = 0;

        for (let cuadro = 0; cuadro < 10; cuadro++) { 
            // console.log("Puntaje Total:", puntajeTotal); 
            if (this.esSpare(cuadroIndex)) {
                // si es un spare suma 10 + el valor del siguiente tiro
                puntajeTotal += 10 + this.tiros[cuadroIndex + 2];
                cuadroIndex += 2; // avanzar al siguiente cuadro
            } else {
                // suma los tiros del cuadro actual si no es un spare
                puntajeTotal += this.tiros[cuadroIndex] + this.tiros[cuadroIndex + 1];
                cuadroIndex += 2; // avanzar al siguiente cuadro
            }
        }
        return  puntajeTotal; 

     }
 }


