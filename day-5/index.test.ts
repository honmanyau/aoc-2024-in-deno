import { describe, it } from "@std/testing/bdd";

import { expect } from "@std/expect/expect";
import { readPuzzleInput } from "./index.ts";

describe("Day 5", () => {
    describe("readPuzzleInput()", () => {
        it("returns an array of paris of numbers for printing rules, and an array of arrays of numbers as updates", async () => {
            const path = `${Deno.cwd()}/day-5/sample-input.txt`;
            const [rules, updates] = await readPuzzleInput(path);

            expect(rules).toEqual({
                "29": {
                    "13": true,
                },
                "47": {
                    "13": true,
                    "29": true,
                    "53": true,
                    "61": true,
                },
                "53": {
                    "13": true,
                    "29": true,
                },
                "61": {
                    "13": true,
                    "29": true,
                    "53": true,
                },
                "75": {
                    "13": true,
                    "29": true,
                    "47": true,
                    "53": true,
                    "61": true,
                },
                "97": {
                    "13": true,
                    "29": true,
                    "47": true,
                    "53": true,
                    "61": true,
                    "75": true,
                },
            });

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
