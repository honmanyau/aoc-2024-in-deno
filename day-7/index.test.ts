import { expect } from "@std/expect/expect";
import { describe, it } from "@std/testing/bdd";

import { constructEquations, evaluate, readPuzzleInput } from "./index.ts";

describe("Day 7", () => {
    describe("readPuzzleInput()", () => {
        it("returns the puzzle input correctly for `sample-input`", async () => {
            const path = `${Deno.cwd()}/day-7/sample-input.txt`;
            const input = await readPuzzleInput(path);
        });
    });

    describe("evaluate()", () => {
        it("returns true for the calibration equation 190: 10 19", () => {
            const result = evaluate("190: 10 19");

            expect(result).toBe(true);
        });

        it("returns true for the calibration equation 3267: 81 40 27", () => {
            const result = evaluate("3267: 81 40 27");

            expect(result).toBe(true);
        });

        it("returns true for the calibration equation 292: 11 6 16 20", () => {
            const result = evaluate("292: 11 6 16 20");

            expect(result).toBe(true);
        });

        it("returns false for the calibration equation 83: 17 5", () => {
            const result = evaluate("83: 17 5");

            expect(result).toBe(false);
        });

        it("returns false for the calibration equation 156: 15 6", () => {
            const result = evaluate("156: 15 6");

            expect(result).toBe(false);
        });

        it("returns false for the calibration equation 7290: 6 8 6 15", () => {
            const result = evaluate("7290: 6 8 6 15");

            expect(result).toBe(false);
        });

        it("returns false for the calibration equation 161011: 16 10 13", () => {
            const result = evaluate("161011: 16 10 13");

            expect(result).toBe(false);
        });

        it("returns false for the calibration equation 192: 17 8 14", () => {
            const result = evaluate("192: 17 8 14");

            expect(result).toBe(false);
        });

        it("returns false for the calibration equation 21037: 9 7 18 13", () => {
            const result = evaluate("21037: 9 7 18 13");

            expect(result).toBe(false);
        });
    });

    describe("constructEquation()", () => {
        it('returns the equations "10 + 19" and "10 * 19" for the operands [10, 19]', () => {
            const result = constructEquations([10, 19]);

            expect(result).toEqual([
                [10, "+", 19],
                [10, "*", 19],
            ]);
        });

        it('returns the equations "81 + 40 + 27", "81 * 40 + 27", "81 + 40 * 27", and "81 * 40 * 27" for the operands [81, 40, 27]', () => {
            const result = constructEquations([81, 40, 27]);

            expect(result).toEqual([
                [81, "+", 40, "+", 27],
                [81, "+", 40, "*", 27],
                [81, "*", 40, "+", 27],
                [81, "*", 40, "*", 27],
            ]);
        });
    });

    // describe("solvePart1()", () => {

    // });

    // describe("solvePart2()", () => {

    // });
});
