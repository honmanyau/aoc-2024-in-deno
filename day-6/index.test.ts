import { describe, it } from "@std/testing/bdd";

import { expect } from "@std/expect/expect";
import { readPuzzleInput } from "./index.ts";

describe("Day 6", () => {
    describe("readPuzzleInput()", () => {
        it("returns the map as an array of arrays of string, with each cell representing a grid on the original map", async () => {
            const path = `${Deno.cwd()}/day-6/sample-input.txt`;
            const input = await readPuzzleInput(path);

            expect(input).toEqual([
                [".", ".", ".", ".", "#", ".", ".", ".", ".", "."],
                [".", ".", ".", ".", ".", ".", ".", ".", ".", "#"],
                [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
                [".", ".", "#", ".", ".", ".", ".", ".", ".", "."],
                [".", ".", ".", ".", ".", ".", ".", "#", ".", "."],
                [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
                [".", "#", ".", ".", "^", ".", ".", ".", ".", "."],
                [".", ".", ".", ".", ".", ".", ".", ".", "#", "."],
                ["#", ".", ".", ".", ".", ".", ".", ".", ".", "."],
                [".", ".", ".", ".", ".", ".", "#", ".", ".", "."],
            ]);
        });
    });
});
