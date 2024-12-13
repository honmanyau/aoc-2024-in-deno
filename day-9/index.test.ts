import { describe, it } from "@std/testing/bdd";

import { expect } from "@std/expect/expect";
import { convertToBlocks, readPuzzleInput } from "./index.ts";

describe("Day 9", () => {
    describe("readPuzzleInput()", () => {
        it("returns the puzzle input correctly for `sample-input`", async () => {
            const path = `${Deno.cwd()}/day-9/sample-input.txt`;
            const input = await readPuzzleInput(path);

            expect(input).toBe("2333133121414131402");
        });
    });

    describe("convertToBlocks()", () => {
        it(`returns 0..111....22222 as an array for the input 12345`, () => {
            const input = "12345";
            const result = convertToBlocks(input);

            expect(result).toEqual("0..111....22222".split(""));
        });

        it(`returns 00...111...2...333.44.5555.6666.777.888899 as an array for the sample`, async () => {
            const path = `${Deno.cwd()}/day-9/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = convertToBlocks(input);

            expect(result).toEqual(
                "00...111...2...333.44.5555.6666.777.888899".split("")
            );
        });
    });

    // describe("solvePart1()", () => {

    // });

    // describe("solvePart2()", () => {

    // });
});
