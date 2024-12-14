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
        it("returns 280 for the first entry in the sample input", async () => {
            const path = `${Deno.cwd()}/day-14/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart1([input[0]]);

            expect(result).toBe(280);
        });

        it("returns 0 for the second entry in the sample input", async () => {
            const path = `${Deno.cwd()}/day-14/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart1([input[1]]);

            expect(result).toBe(0);
        });

        it("returns 200 for the third entry in the sample input", async () => {
            const path = `${Deno.cwd()}/day-14/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart1([input[2]]);

            expect(result).toBe(200);
        });

        it("returns 0 for the fourth entry in the sample input", async () => {
            const path = `${Deno.cwd()}/day-14/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart1([input[3]]);

            expect(result).toBe(0);
        });

        it("returns 480 for the the sample input", async () => {
            const path = `${Deno.cwd()}/day-14/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart1(input);

            expect(result).toBe(480);
        });
    });

    describe("solvePart2()", () => {
        it("returns 0 for the first entry in the sample input", async () => {
            const path = `${Deno.cwd()}/day-14/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart2([input[0]]);

            expect(result).toBe(0);
        });

        it("returns some number greater than 0 for the second entry in the sample input", async () => {
            const path = `${Deno.cwd()}/day-14/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart2([input[1]]);

            expect(result).toBeGreaterThan(0);
        });

        it("returns 0 for the third entry in the sample input", async () => {
            const path = `${Deno.cwd()}/day-14/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart2([input[2]]);

            expect(result).toBe(0);
        });

        it("returns some number greater than 0 for the fourth entry in the sample input", async () => {
            const path = `${Deno.cwd()}/day-14/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart2([input[3]]);

            expect(result).toBeGreaterThan(0);
        });
    });
});
