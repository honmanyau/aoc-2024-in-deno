import { describe, it } from "@std/testing/bdd";

import { readPuzzleInput } from "./index.ts";

describe("Day 13", () => {
    describe("readPuzzleInput()", () => {
        it("returns the puzzle input correctly for `sample-input`", async () => {
            const path = `${Deno.cwd()}/day-13/sample-input.txt`;
            const input = await readPuzzleInput(path);
        });
    });

    // describe("solvePart1()", () => {

    // });

    // describe("solvePart2()", () => {

    // });
});
