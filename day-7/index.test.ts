import { expect } from "@std/expect/expect";
import { describe, it } from "@std/testing/bdd";

import { readPuzzleInput } from "./index.ts";

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

    // describe("solvePart1()", () => {

    // });

    // describe("solvePart2()", () => {

    // });
});
