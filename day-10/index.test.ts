import { describe, it } from "@std/testing/bdd";

import { expect } from "@std/expect/expect";
import { readPuzzleInput, solvePart1, solvePart2, step } from "./index.ts";

describe("Day 10", () => {
    describe("readPuzzleInput()", () => {
        it("returns the puzzle input correctly for `sample-input`", async () => {
            const path = `${Deno.cwd()}/day-10/sample-input.txt`;
            const input = await readPuzzleInput(path);

            expect(input).toEqual([
                "89010123".split("").map(Number),
                "78121874".split("").map(Number),
                "87430965".split("").map(Number),
                "96549874".split("").map(Number),
                "45678903".split("").map(Number),
                "32019012".split("").map(Number),
                "01329801".split("").map(Number),
                "10456732".split("").map(Number),
            ]);
        });
    });

    describe("step()", () => {
        it("returns [[0, 3], [1, 2]] for the sample input with a starting position of [0, 2]", async () => {
            const path = `${Deno.cwd()}/day-10/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const positions = step(input, [0, 2]);

            expect(positions).toEqual([
                [1, 2],
                [0, 3],
            ]);
        });

        it("returns [[1, 4]] for the sample input with a starting position of [2, 4]", async () => {
            const path = `${Deno.cwd()}/day-10/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const positions = step(input, [2, 4]);

            expect(positions).toEqual([[1, 4]]);
        });

        it("returns [[1, 4]] for the sample input with a starting position of [2, 4]", async () => {
            const path = `${Deno.cwd()}/day-10/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const positions = step(input, [2, 4]);

            expect(positions).toEqual([[1, 4]]);
        });

        it("returns [[1, 3]] for the sample input with a starting position of [1, 4]", async () => {
            const path = `${Deno.cwd()}/day-10/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const positions = step(input, [1, 4]);

            expect(positions).toEqual([[1, 3]]);
        });

        it("returns [] for the sample input with a starting position of [1, 4] if [1, 3] were replaced with a number that's not a single increase in height", async () => {
            const path = `${Deno.cwd()}/day-10/sample-input.txt`;
            const input = await readPuzzleInput(path);

            input[1][3] = input[1][3] + 1;

            const positions = step(input, [1, 4]);

            expect(positions).toEqual([]);
        });
    });

    describe("solvePart1()", () => {
        it("returns", async () => {
            const path = `${Deno.cwd()}/day-10/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart1(input);
        });
    });

    describe("solvePart2()", () => {
        it("returns", async () => {
            const path = `${Deno.cwd()}/day-10/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart2(input);
        });
    });
});
