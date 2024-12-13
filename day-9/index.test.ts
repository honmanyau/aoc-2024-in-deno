import { describe, it } from "@std/testing/bdd";

import { expect } from "@std/expect/expect";
import { convertToBlocks, defrag, readPuzzleInput } from "./index.ts";

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

    describe("defrag()", () => {
        it(`converts 0..111....22222 to 022111222......`, () => {
            const input = "0..111....22222".split("");
            const result = defrag(input);

            expect(result).toEqual("022111222......".split(""));
        });

        it(`converts 022111....222.. to 022111222......`, () => {
            const input = "022111....222..".split("");
            const result = defrag(input);

            expect(result).toEqual("022111222......".split(""));
        });

        it(`converts 00...111...2...333.44.5555.6666.777.888899 to 0099811188827773336446555566..............`, () => {
            const input = "00...111...2...333.44.5555.6666.777.888899".split(
                ""
            );
            const result = defrag(input);

            expect(result).toEqual(
                "0099811188827773336446555566..............".split("")
            );
        });

        it(`converts 0099811188.2...333.44.5555.6666.777.8..... to 0099811188827773336446555566..............`, () => {
            const input = "0099811188.2...333.44.5555.6666.777.8.....".split(
                ""
            );
            const result = defrag(input);

            expect(result).toEqual(
                "0099811188827773336446555566..............".split("")
            );
        });
    });

    // describe("solvePart1()", () => {

    // });

    // describe("solvePart2()", () => {

    // });
});
