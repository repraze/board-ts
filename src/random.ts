type Generator = () => number;

export class Random {
    private generator: Generator;
    constructor(generator: Generator) {
        this.generator = generator;
    }
    int(min: number, max: number): number {
        return Math.floor(this.generator() * (max - min + 1)) + min;
    }
    float(min: number, max: number): number {
        return this.generator() * (max - min) + min;
    }
    bool(): boolean {
        return this.generator() < 0.5;
    }
    item<T>(list: T[]): T {
        return list[this.int(0, list.length - 1)];
    }
}
