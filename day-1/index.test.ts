import { expect } from "@std/expect/expect";
import { describe, it } from "@std/testing/bdd";

import { readPuzzleInput, solve } from "./index.ts";

describe("Day 1", () => {
    describe("readPuzzleInput()", () => {
        it("returns and array of two arrays of sorted (ascending) integers of equal length", async () => {
            const path = `${Deno.cwd()}/day-1/example-input.txt`;
            const input = await readPuzzleInput(path);

            expect(input.length).toBe(2);
            expect(input[0].length).toBe(input[1].length);

            for (let i = 0; i < input[0].length; i++) {
                expect(Number.isInteger(input[0][i])).toBe(true);
                expect(Number.isInteger(input[1][i])).toBe(true);

                if (input[0][i + 1] !== undefined) {
                    expect(input[0][i]).toBeLessThanOrEqual(input[0][i + 1]);
                    expect(input[1][i]).toBeLessThanOrEqual(input[1][i + 1]);
                }
            }
        });
    });

    describe("solve()", () => {
        it("returns 11 for the example input", async () => {
            const path = `${Deno.cwd()}/day-1/example-input.txt`;
            const input = await readPuzzleInput(path);
            const solution = solve(input);

            expect(solution).toBe(11);
        });

        it("returns 0 for the lists [0, 1, 2] and [0, 1, 2]", () => {
            const input: [number[], number[]] = [
                [0, 1, 2],
                [0, 1, 2],
            ];
            const solution = solve(input);

            expect(solution).toBe(0);
        });

        it("returns 0 for the lists [0, 1, 2] and [2, 1, 0]", () => {
            const input: [number[], number[]] = [
                [0, 1, 2],
                [2, 1, 0],
            ];
            const solution = solve(input);

            expect(solution).toBe(0);
        });

        it("returns 0 for the lists [0, 1, 2] and [1, 2, 3]", () => {
            const input: [number[], number[]] = [
                [0, 1, 2],
                [1, 2, 3],
            ];
            const solution = solve(input);

            expect(solution).toBe(3);
        });

        it("returns 0 for the lists [2, 0, 1] and [3, 1, 2]", () => {
            const input: [number[], number[]] = [
                [2, 0, 1],
                [3, 1, 2],
            ];
            const solution = solve(input);

            expect(solution).toBe(3);
        });
    });
});
