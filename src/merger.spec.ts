// src/merger.spec.ts
import { merge } from './merger';

describe('merge function', () => {

    // Test case 1: Normal case
    it('should properly merge three correctly formatted arrays', () => {
        const c1 = [1, 3, 5];
        const c2 = [6, 4, 2];
        const c3 = [0, 7, 8];

        const result = merge(c1, c2, c3);

        expect(result).toEqual([0,1,2,3,4,5,6,7,8]);
    });

    // Test case 2: Empty arrays
    it('should handle empty arrays safely without crashing', () => {
        const c1: number[] = [];
        const c2 = [5, 3, 1];
        const c3: number[] = [];

        const result = merge(c1, c2, c3);

        expect(result).toEqual([1,3,5]);
    });

    // Test case 3: Duplicate numbers
    it('should handle duplicate numbers correctly across all arrays', () => {
        const c1 = [1, 2, 2];
        const c2 = [3, 2, 1];
        const c3 = [1, 3, 4];

        const result = merge(c1, c2, c3);

        expect(result).toEqual([1,1,1,2,2,2,3,3,4]);
    });

    // Test case 4: Negative numbers
    it('should handle negative numbers correctly across all arrays', () => {
        const c1 = [-5, 0, 5];
        const c2 = [2, -2, -8];
        const c3 = [-10, 10];

        const result = merge(c1, c2, c3);

        expect(result).toEqual([-10, -8, -5, -2, 0, 2, 5, 10]);
    });
});