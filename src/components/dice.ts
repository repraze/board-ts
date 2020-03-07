import random, { Random, Generator } from "../random";

export type DiceParams<Face> = {
    faces: Face[];
    weights?: number[];
    generator?: Generator;
};

export default class Dice<Face> {
    private faces: Face[];
    private weights?: number[];
    private random: Random;
    private state: Face;
    constructor({ faces, weights, generator }: DiceParams<Face>) {
        if (faces.length === 0) {
            throw new Error("Dice must have at least one face");
        }
        this.faces = faces;
        if (weights !== undefined) {
            if (weights.length !== faces.length) {
                throw new Error("One dice weight should be given per face");
            }
            this.weights = weights;
        }
        if (generator !== undefined) {
            this.random = new Random(generator);
        } else {
            this.random = random;
        }
        // start on first face
        this.state = this.faces[0];
    }
    get value(): Face {
        return this.state;
    }
    roll(): void {
        if (this.weights !== undefined) {
            this.state = this.random.weightedListItem<Face>(this.faces, this.weights);
        } else {
            this.state = this.random.listItem<Face>(this.faces);
        }
    }
}
