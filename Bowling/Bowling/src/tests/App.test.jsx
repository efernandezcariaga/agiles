/* eslint-disable no-undef */
import Juego from "../Juego"; 

describe('Juego de Bowling', () => {
    it('puntaje de 0', () => {
        const juego = new Juego(); 

        // for (let i = 0; i < 20; i++) {
        //     juego.tirar(0); 
        // }
        // expect(juego.score()).toBe(0);
        // // Test 1 

        // for (let i = 0; i < 20; i++) {
        //     juego.tirar(1); 
        // }
        // expect(juego.score()).toBe(20);
        // Test 2 



        // hago que sea un spare
        juego.tirar(5); 
        juego.tirar(5); 

        // tiro dsp del spare
        juego.tirar(3); 

        // completa el resto de tiros
        for (let i = 3; i < 20; i++) {
            juego.tirar(0); 
        }

        const valorEsperado = 16; // 10 del spare + 3 del siguiente tiro

        expect(juego.score()).toBe(valorEsperado); 
        // Test 3 
    });
});
