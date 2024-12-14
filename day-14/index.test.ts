import { describe, it } from "@std/testing/bdd";

import { expect } from "@std/expect/expect";
import { readPuzzleInput, solvePart1, solvePart2 } from "./index.ts";

describe("Day 14", () => {
    describe("readPuzzleInput()", () => {
        it("returns the puzzle input correctly for `sample-input`", async () => {
            const path = `${Deno.cwd()}/day-14/sample-input.txt`;
            const input = await readPuzzleInput(path);

            expect(input).toEqual([
                [
                    [4, 0],
                    [-3, 3],
                ],
                [
                    [3, 6],
                    [-3, -1],
                ],
                [
                    [3, 10],
                    [2, -1],
                ],
                [
                    [0, 2],
                    [-1, 2],
                ],
                [
                    [0, 0],
                    [3, 1],
                ],
                [
                    [0, 3],
                    [-2, -2],
                ],
                [
                    [6, 7],
                    [-3, -1],
                ],
                [
                    [0, 3],
                    [-2, -1],
                ],
                [
                    [3, 9],
                    [3, 2],
                ],
                [
                    [3, 7],
                    [2, -1],
                ],
                [
                    [4, 2],
                    [-3, 2],
                ],
                [
                    [5, 9],
                    [-3, -3],
                ],
            ]);
        });
    });

    describe("readPuzzleInput()", () => {
        it("returns the puzzle input correctly for `sample-input`", async () => {
            const path = `${Deno.cwd()}/day-14/sample-input.txt`;
            const input = await readPuzzleInput(path);

            expect(input).toEqual([
                [
                    [94, 34],
                    [22, 67],
                    [8400, 5400],
                ],
                [
                    [26, 66],
                    [67, 21],
                    [12748, 12176],
                ],
                [
                    [17, 86],
                    [84, 37],
                    [7870, 6450],
                ],
                [
                    [69, 23],
                    [27, 71],
                    [18641, 10279],
                ],
            ]);
        });
    });

    describe("solvePart1()", () => {
        it("returns", async () => {
            const path = `${Deno.cwd()}/day-14/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart1(input);
        });
    });

    describe("solvePart2()", () => {
        it("returns", async () => {
            const path = `${Deno.cwd()}/day-14/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart2([input[0]]);
        });
    });
});
