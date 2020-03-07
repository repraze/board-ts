export function range(start: number, stop?: number, step?: number): number[] {
    if (stop === undefined) {
        stop = start;
        start = 0;
    }
    if (step === undefined) {
        step = start < stop ? 1 : -1;
    }

    let index = -1;
    let length = Math.max(Math.ceil((stop - start) / (step || 1)), 0);
    const result = new Array(length);
    while (length--) {
        result[++index] = start;
        start += step;
    }
    return result;
}
