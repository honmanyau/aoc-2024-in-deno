import { expect } from "@std/expect/expect";
import { describe, it } from "@std/testing/bdd";

import { evalulate, readPuzzleInput } from "./index.ts";

describe("Day 7", () => {
    describe("readPuzzleInput()", () => {
        it("returns the puzzle input correctly for `sample-input`", async () => {
            const path = `${Deno.cwd()}/day-7/sample-input.txt`;
            const input = await readPuzzleInput(path);

            expect(input).toEqual([
                ["A", "A", "A", "A"],
                ["B", "B", "C", "D"],
                ["B", "B", "C", "C"],
                ["E", "E", "E", "C"],
            ]);
        });
    });

    describe("evaluate()", () => {
        it("returns true for the calibration equation 190: 10 19", () => {
            const result = evalulate("190: 10 19");

            expect(result).toBe(true);
        });

        it("returns true for the calibration equation 3267: 81 40 27", () => {
            const result = evalulate("3267: 81 40 27");

            expect(result).toBe(true);
        });

        it("returns true for the calibration equation 292: 11 6 16 20", () => {
            const result = evalulate("292: 11 6 16 20");

            expect(result).toBe(true);
        });

        it("returns false for the calibration equation 83: 17 5", () => {
            const result = evalulate("83: 17 5");

            expect(result).toBe(false);
        });

        it("returns false for the calibration equation 156: 15 6", () => {
            const result = evalulate("156: 15 6");

            expect(result).toBe(false);
        });

        it("returns false for the calibration equation 7290: 6 8 6 15", () => {
            const result = evalulate("7290: 6 8 6 15");

            expect(result).toBe(false);
        });

        it("returns false for the calibration equation 161011: 16 10 13", () => {
            const result = evalulate("161011: 16 10 13");

            expect(result).toBe(false);
        });

        it("returns false for the calibration equation 192: 17 8 14", () => {
            const result = evalulate("192: 17 8 14");

            expect(result).toBe(false);
        });

        it("returns false for the calibration equation 21037: 9 7 18 13", () => {
            const result = evalulate("21037: 9 7 18 13");

            expect(result).toBe(false);
        });
    });

    // describe("solvePart1()", () => {

    // });

    // describe("solvePart2()", () => {

    // });
});
