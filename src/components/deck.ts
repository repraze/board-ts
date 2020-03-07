import random, { Random, Generator } from "../random";

export interface Card {
    value: () => void;
}

export default class Deck<C extends Card> {
    private cards: C[];
    constructor() {
        this.cards = [];
    }
    peek(): C {
        return this.cards[this.cards.length - 1];
    }
    shuffle(): void {
        this.cards = random.listShuffle<C>(this.cards);
    }
}
