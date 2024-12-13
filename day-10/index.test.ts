import { describe, it } from "@std/testing/bdd";

import { expect } from "@std/expect/expect";
import { readPuzzleInput, solvePart1, solvePart2 } from "./index.ts";

describe("Day 10", () => {
    describe("readPuzzleInput()", () => {
        it("returns the puzzle input correctly for `sample-input`", async () => {
            const path = `${Deno.cwd()}/day-10/sample-input.txt`;
            const input = await readPuzzleInput(path);

            expect(input).toEqual([
                "89010123".split("").map(Number),
                "78121874".split("").map(Number),
                "87430965".split("").map(Number),
                "96549874".split("").map(Number),
                "45678903".split("").map(Number),
                "32019012".split("").map(Number),
                "01329801".split("").map(Number),
                "10456732".split("").map(Number),
            ]);
        });
    });

    describe("solvePart1()", () => {
        it("returns", async () => {
            const path = `${Deno.cwd()}/day-10/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart1(input);
        });
    });

    describe("solvePart2()", () => {
        it("returns", async () => {
            const path = `${Deno.cwd()}/day-10/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart2(input);
        });
    });
});
