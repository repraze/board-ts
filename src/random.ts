export type Generator = () => number;

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
    weightedListItem<T>(list: T[], weights: number[]): T {
        const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
        const weightSections: number[] = [];
        let adjustedWeight = 0;
        let previousWeight = 0;
        weights.forEach(weight => {
            adjustedWeight = weight / totalWeight + previousWeight;
            weightSections.push(adjustedWeight);
            previousWeight = adjustedWeight;
        });
        const selectedWeight = this.generator();
        let selectedItem = 0;
        while (weightSections[selectedItem] < selectedWeight) {
            selectedItem++;
        }
        return list[selectedItem];
    }
    // Fisher-Yates
    listShuffle<T>(list: T[]): T[] {
        const shuffledList = [...list];
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
