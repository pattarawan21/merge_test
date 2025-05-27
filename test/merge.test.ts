import { merge } from '../src/merge';

describe('merge', () => {
    it('should merge three arrays correctly', () => {
        const c1 = [1, 4, 7];
        const c2 = [9, 6, 2]; 
        const c3 = [0, 5, 10];

        const result = merge(c1, c2, c3);
        expect(result).toEqual([0, 1, 2, 4, 5, 6, 7, 9, 10]);
    });

    it('should handle empty arrays', () => {
        expect(merge([], [], [])).toEqual([]);
        expect(merge([1, 2], [], [])).toEqual([1, 2]);
        expect(merge([], [2, 1], [])).toEqual([1, 2]);
    });

    it('should handle arrays with duplicate values', () => {
        const c1 = [1, 2];
        const c2 = [3, 2];
        const c3 = [1, 5];

        const result = merge(c1, c2, c3);
        expect(result).toEqual([1, 1, 2, 2, 3, 5]);
    });
});