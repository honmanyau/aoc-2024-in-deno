import { describe, it } from "@std/testing/bdd";

import { expect } from "@std/expect/expect";
import { readPuzzleInput } from "./index.ts";

describe("Day 5", () => {
    describe("readPuzzleInput()", () => {
        it("returns an array of paris of numbers for printing rules, and an array of arrays of numbers as updates", async () => {
            const path = `${Deno.cwd()}/day-5/sample-input.txt`;
            const [rules, updates] = await readPuzzleInput(path);

            expect(rules).toEqual([
                [47, 53],
                [97, 13],
                [97, 61],
                [97, 47],
                [75, 29],
                [61, 13],
                [75, 53],
                [29, 13],
                [97, 29],
                [53, 29],
                [61, 53],
                [97, 53],
                [61, 29],
                [47, 13],
                [75, 47],
                [97, 75],
                [47, 61],
                [75, 61],
                [47, 29],
                [75, 13],
                [53, 13],
            ]);

            expect(updates).toEqual([
                [75, 47, 61, 53, 29],
                [97, 61, 53, 29, 13],
                [75, 29, 13],
                [75, 97, 47, 61, 53],
                [61, 13, 29],
                [97, 13, 75, 29, 47],
            ]);
        });
    });
});
