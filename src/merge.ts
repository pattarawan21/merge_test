export function merge(
    collection_1: number[],
    collection_2: number[],
    collection_3: number[]
): number[] {
    const reversed2 = [...collection_2].reverse();

    return mergeThreeSorted(collection_1, reversed2, collection_3);
}

function mergeThreeSorted(
    a: number[],
    b: number[],
    c: number[]
): number[] {
    const result: number[] = [];
    let i = 0, j = 0, k = 0;

    while (i < a.length || j < b.length || k < c.length) {
        const valA = i < a.length ? a[i] : Infinity;
        const valB = j < b.length ? b[j] : Infinity;
        const valC = k < c.length ? c[k] : Infinity;

        if (valA <= valB && valA <= valC) {
            result.push(valA);
            i++;
        } else if (valB <= valA && valB <= valC) {
            result.push(valB);
            j++;
        } else {
            result.push(valC);
            k++;
        }
    }

    return result;
}