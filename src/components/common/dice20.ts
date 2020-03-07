import { range } from "../../utils";
import Dice, { DiceParams } from "../dice";

export default class Dice20 extends Dice<number> {
    constructor({ ...params }: DiceParams<number>) {
        super({ ...params, faces: range(1, 21) });
    }
}
