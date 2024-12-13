import { describe, it } from "@std/testing/bdd";

import { readPuzzleInput, solvePart1, solvePart2 } from "./index.ts";

describe("Day 11", () => {
    describe("readPuzzleInput()", () => {
        it("returns the puzzle input correctly for `sample-input`", async () => {
            const path = `${Deno.cwd()}/day-11/sample-input.txt`;
            const input = await readPuzzleInput(path);
        });
    });

    describe("solvePart1()", () => {
        it("returns 36 for the sample input", async () => {
            const path = `${Deno.cwd()}/day-11/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart1(input);
        });
    });

    describe("solvePart2()", () => {
        it("returns 3 for the fifth sample input", async () => {
            const path = `${Deno.cwd()}/day-11/sample-input-5.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart2(input);
        });
    });
});
