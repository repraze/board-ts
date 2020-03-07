import { expect } from "chai";
import { range } from "./utils";

describe("utils", () => {
    describe("range", () => {
        describe("stop", () => {
            it("should generate range with stop", () => {
                expect(range(0)).to.be.deep.equal([]);
                expect(range(1)).to.be.deep.equal([0]);
                expect(range(5)).to.be.deep.equal([0, 1, 2, 3, 4]);
                expect(range(10)).to.be.deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
            });
            it("should generate range with negative stop", () => {
                expect(range(-1)).to.be.deep.equal([0]);
                expect(range(-5)).to.be.deep.equal([0, -1, -2, -3, -4]);
            });
        });
        describe("start and stop", () => {
            it("should generate range with start and stop", () => {
                expect(range(0, 0)).to.be.deep.equal([]);
                expect(range(0, 1)).to.be.deep.equal([0]);
                expect(range(2, 5)).to.be.deep.equal([2, 3, 4]);
                expect(range(5, 10)).to.be.deep.equal([5, 6, 7, 8, 9]);
            });
            it("should generate range with negative start and stop", () => {
                expect(range(-2, 3)).to.be.deep.equal([-2, -1, 0, 1, 2]);
            });
            it("should generate range with start and negative stop", () => {
                expect(range(2, -3)).to.be.deep.equal([2, 1, 0, -1, -2]);
            });
            it("should generate range with negative start and negative stop", () => {
                expect(range(-5, -2)).to.be.deep.equal([-5, -4, -3]);
            });
            it("should generate range with negative start and negative stop", () => {
                expect(range(-5, -2)).to.be.deep.equal([-5, -4, -3]);
            });
        });
        describe("start, stop and step", () => {
            it("should generate range with start, stop and step", () => {
                expect(range(0, 0, 0)).to.be.deep.equal([]);
                expect(range(0, 1, 2)).to.be.deep.equal([0]);
                expect(range(1, 10, 3)).to.be.deep.equal([1, 4, 7]);
            });
        });
    });
});
