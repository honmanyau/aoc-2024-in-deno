import { describe, it } from "@std/testing/bdd";

import { readPuzzleInput } from "./index.ts";

describe("Day 20", () => {
    describe("readPuzzleInput()", () => {
        it("returns the puzzle input correctly for the first sample input", async () => {
            const path = `${Deno.cwd()}/day-20/sample-input.txt`;
            const input = await readPuzzleInput(path);
        });
    });

    describe("solvePart1()", () => {
        it("returns", async () => {
            const path = `${Deno.cwd()}/day-20/sample-input.txt`;
            const input = await readPuzzleInput(path);
        });
    });

    describe("solvePart2()", () => {
        it("returns 16 for the sample input", async () => {
            const path = `${Deno.cwd()}/day-20/sample-input.txt`;
            const input = await readPuzzleInput(path);
        });
    });
});
