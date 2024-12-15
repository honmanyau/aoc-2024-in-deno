import { expect } from "@std/expect/expect";
import { describe, it } from "@std/testing/bdd";

import { readPuzzleInput } from "./index.ts";

describe("Day 15", () => {
    describe("readPuzzleInput()", () => {
        it("returns the puzzle input correctly for `sample-input`", async () => {
            const path = `${Deno.cwd()}/day-15/sample-input.txt`;
            const [map, instructions] = await readPuzzleInput(path);

            expect(map.slice(0, 2)).toEqual([
                "##########".split(""),
                "#..O..O.O#".split(""),
            ]);

            expect(instructions.slice(0, 10)).toBe("<vv>^<v^>v");
        });
    });

    describe("solvePart1()", () => {
        it("returns 12 for the sample input after 100 seconds", async () => {
            const path = `${Deno.cwd()}/day-15/sample-input.txt`;
            const input = await readPuzzleInput(path);
        });
    });

    describe("solvePart2()", () => {
        it("returns", async () => {
            const path = `${Deno.cwd()}/day-15/sample-input.txt`;
            const input = await readPuzzleInput(path);
        });
    });
});
