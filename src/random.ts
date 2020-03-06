type Generator = () => number;

export class Random {
    private generator: Generator;
    constructor(generator: Generator) {
        this.generator = generator;
    }
    static default() {
        return new Random(Math.random);
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
    listItem<T>(list: T[]): T {
        return list[this.int(0, list.length - 1)];
    }
    listItems<T>(list: T[], amount: number): T[] {
        throw new Error("not implemented");
    }
    // Fisher-Yates
    listShuffle<T>(list: T[]): T[] {
        let shuffledList = [...list];
        let currentPosition = list.length - 1;
        let newPosition;
        let item;
        while (currentPosition) {
            // pick random in rest
            newPosition = this.int(0, currentPosition);
            // swap the 2
            item = list[newPosition];
            list[newPosition] = list[currentPosition];
            list[currentPosition] = item;
            currentPosition -= 1;
        }
        return shuffledList;
    }
}

const random = Random.default();
export default random;
