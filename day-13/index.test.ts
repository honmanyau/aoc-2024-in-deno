import { describe, it } from "@std/testing/bdd";

import { expect } from "@std/expect/expect";
import { readPuzzleInput } from "./index.ts";

describe("Day 13", () => {
    describe("readPuzzleInput()", () => {
        it("returns the puzzle input correctly for `sample-input`", async () => {
            const path = `${Deno.cwd()}/day-13/sample-input.txt`;
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

    // describe("solvePart1()", () => {

    // });

    // describe("solvePart2()", () => {

    // });
});
