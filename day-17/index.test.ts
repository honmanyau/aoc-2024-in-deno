import { describe, it } from "@std/testing/bdd";

import { expect } from "@std/expect/expect";
import { readPuzzleInput } from "./index.ts";

describe("Day 17", () => {
    describe("readPuzzleInput()", () => {
        it("returns the puzzle input correctly for the first sample input", async () => {
            const path = `${Deno.cwd()}/day-17/sample-input-0.txt`;
            const [registers, program] = await readPuzzleInput(path);

            expect(registers).toEqual({
                A: 256,
                B: 0,
                C: 42,
            });

            expect(program).toEqual([
                [0, 3],
                [1, 2],
                [4, 0],
            ]);
        });
    });

    describe("solvePart1()", () => {
        it("returns", async () => {
            const path = `${Deno.cwd()}/day-17/sample-input.txt`;
            const input = await readPuzzleInput(path);
        });
    });

    describe("solvePart2()", () => {
        it("returns", async () => {
            const path = `${Deno.cwd()}/day-17/sample-input.txt`;
            const input = await readPuzzleInput(path);
        });
    });
});
