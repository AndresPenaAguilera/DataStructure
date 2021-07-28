
const duplicateZeros = require('./duplicateZeros');

describe('Test duplicate zero', () => {

    test('When array has one zero', () => {
        var input = [0];
        expect(duplicateZeros(input)).toEqual([0]);

    });

    test('When array has 2 numbers, but zero is part left', () => {
        var input = [0,1];
        expect(duplicateZeros(input)).toEqual([0,0]);

    });

    test('When array not has zero', () => {
        var input = [1,2,3];
        expect(duplicateZeros(input)).toEqual([1,2,3]);

    });

    test('When array has 3 numbers, but zero is part left', () => {
        
        var input = [0,2,3];
        var expected = [0,0,2];

        expect(duplicateZeros(input)).toEqual(expected);

    });

    test('When array has 2 zeros in different position', () => {
        
        var input = [0,2,3,0,5];
        var expected = [0,0,2,3,0];

        expect(duplicateZeros(input)).toEqual(expected);

    });

    test('When array has many zeros', () => {
        
        var input = [1,0,2,3,0,4,5,0];
        var expected = [1,0,0,2,3,0,0,4];

        expect(duplicateZeros(input)).toEqual(expected);

    });

});