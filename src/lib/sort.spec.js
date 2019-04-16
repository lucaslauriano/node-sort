const sort = require('./sort');

describe('Test sorting algorithms', () => {

    it('Should not change an ordered array', () => {
        const input = [2, 3, 4, 5];

        const ordered = sort(input);

        expect(ordered).toBeDefined();
        expect(ordered[0]).toBe(2);
        expect(ordered[1]).toBe(3);
        expect(ordered[2]).toBe(4);
        expect(ordered[3]).toBe(5);
    });

    it('Should order an unordered array', () => {
        const input = [5, 4, 3, 2];

        const ordered = sort(input);

        expect(ordered).toBeDefined();
        expect(ordered[0]).toBe(2);
        expect(ordered[1]).toBe(3);
        expect(ordered[2]).toBe(4);
        expect(ordered[3]).toBe(5);
    });

});