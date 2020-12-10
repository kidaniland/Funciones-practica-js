import funciones from '../src/funciones.js';

describe('funciones', () => {
    test('debería ser un objeto', () => {
        expect(typeof funciones).toBe('object');
    });
});

describe('funciones.isEvenNumber', () => {
    test('debería ser una función', () => {
        expect(typeof funciones.isEvenNumber).toBe('function');
    });
    test('debería retornar true para 200', () => {
        expect(funciones.isEvenNumber(200)).toBe(true);
    });
    test('debería retornar false para 113', () => {
        expect(funciones.isEvenNumber(113)).toBe(false);
    });
});

describe('funciones.addDigits', () => {
    test('debería ser una función', () => {
        expect(typeof funciones.addDigits).toBe('function');
    });
    test('debería retornar 17 para "5552"', () => {
        expect(funciones.addDigits("5552")).toBe(17);
    });
});

describe('funciones.isPalindrome', () => {
    test('debería ser una función', () => {
        expect(typeof funciones.isPalindrome).toBe('function');
    });
    test('debería retornar true para "oso"', () => {
        expect(funciones.isPalindrome("oso")).toBe(true);
    });
    test('debería retornar false para "poso"', () => {
        expect(funciones.isPalindrome("poso")).toBe(false);
    });
});

describe('funciones.numDivisor', () => {
    test('debería ser una función', () => {
        expect(typeof funciones.numDivisor).toBe('function');
    });
    test('debería retornar 1 para 23', () => {
        expect(funciones.numDivisor(23)).toBe(2);
    });
});
