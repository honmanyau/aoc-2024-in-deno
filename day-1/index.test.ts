import { expect } from "@std/expect/expect";
import { describe, it } from "@std/testing/bdd";

import {
    calculateDistance,
    calculateSimilarityScore,
    createDictionary,
    readPuzzleInput,
} from "./index.ts";

describe("Day 1", () => {
    describe("readPuzzleInput()", () => {
        it("returns and array of two arrays of sorted (ascending) integers of equal length", async () => {
            const path = `${Deno.cwd()}/day-1/sample-input.txt`;
            const input = await readPuzzleInput(path);

            expect(input.length).toBe(2);
            expect(input[0].length).toBe(input[1].length);

            for (let i = 0; i < input[0].length; i++) {
                expect(Number.isInteger(input[0][i])).toBe(true);
                expect(Number.isInteger(input[1][i])).toBe(true);
                expect(input[0].every(Number.isInteger)).toBe(true);
                expect(input[1].every(Number.isInteger)).toBe(true);
            }
        });
    });

    describe("calculateDistance()", () => {
        it("returns 11 for the example input", async () => {
            const path = `${Deno.cwd()}/day-1/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const solution = calculateDistance(input);

            expect(solution).toBe(11);
        });

        it("returns 0 for the lists [0, 1, 2] and [0, 1, 2]", () => {
            const input: [number[], number[]] = [
                [0, 1, 2],
                [0, 1, 2],
            ];
            const solution = calculateDistance(input);

            expect(solution).toBe(0);
        });

        it("returns 0 for the lists [0, 1, 2] and [2, 1, 0]", () => {
            const input: [number[], number[]] = [
                [0, 1, 2],
                [2, 1, 0],
            ];
            const solution = calculateDistance(input);

            expect(solution).toBe(0);
        });

        it("returns 0 for the lists [0, 1, 2] and [1, 2, 3]", () => {
            const input: [number[], number[]] = [
                [0, 1, 2],
                [1, 2, 3],
            ];
            const solution = calculateDistance(input);

            expect(solution).toBe(3);
        });

        it("returns 0 for the lists [2, 0, 1] and [3, 1, 2]", () => {
            const input: [number[], number[]] = [
                [2, 0, 1],
                [3, 1, 2],
            ];
            const solution = calculateDistance(input);

            expect(solution).toBe(3);
        });
    });

    describe("createDictionary()", () => {
        it("returns a dictionary with keys for all integers in the input array and their values set to 0", async () => {
            const path = `${Deno.cwd()}/day-1/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const dictionary1 = createDictionary(input[0]);
            const dictionary2 = createDictionary(input[1]);

            expect(dictionary1).toEqual({ 1: 1, 2: 1, 3: 3, 4: 1 });
            expect(dictionary2).toEqual({ 3: 3, 4: 1, 5: 1, 9: 1 });
        });
    });

    describe("calculateSimilarityScore()", () => {
        it("returns 31 for the example input", async () => {
            const path = `${Deno.cwd()}/day-1/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const solution = calculateSimilarityScore(input);

            expect(solution).toBe(31);
        });
    });
});
