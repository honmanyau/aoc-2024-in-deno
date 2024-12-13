import { describe, it } from "@std/testing/bdd";

import { readPuzzleInput, solvePart1, solvePart2 } from "./index.ts";

describe("Day 10", () => {
    describe("readPuzzleInput()", () => {
        it("returns the puzzle input correctly for `sample-input`", async () => {
            const path = `${Deno.cwd()}/day-10/sample-input.txt`;
            const input = await readPuzzleInput(path);
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
