const Sumar = require('../src/stringCalculator');

describe('Sumar', () => {
    test('Debería devolver 0 cuando se coloca un string vacío', () => {
        expect(Sumar('')).toBe(0);
    });

    test('Debería devolver 1 cuando se coloca "1"', () => {
        expect(Sumar('1')).toBe(1);
    });

    test("Debería devolver 3 cuando se suma '1,2'", () => {
        expect(Sumar('1,2')).toBe(3);
    });

    test("Debería devolver 18 cuando se suma '3,8,7'", () => {
        expect(Sumar('3,8,7')).toBe(18);
    });

    test('Deberia devolver 14 cuando se suma 1,2,4\n5,6', () => {
        expect(Sumar('1,2,4\n5,6')).toBe(18);
    });

    test('Deberia devolver 14 por mas que se use delimitador', () => {
        expect(Sumar('//;\n1;3;6;4')).toBe(14);
    });

    test('Debería lanzar un error si se encuentran números negativos', () => {
        expect(() => Sumar('1,-3,6,4')).toThrow('No se permiten negativos: -3');
    });
});
