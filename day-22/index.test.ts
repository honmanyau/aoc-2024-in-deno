import { describe, it } from "@std/testing/bdd";

import { expect } from "@std/expect/expect";
import { mix, prune, readPuzzleInput } from "./index.ts";

describe("Day 22", () => {
    describe("readPuzzleInput()", () => {
        it("returns the puzzle input correctly for the first sample input", async () => {
            const path = `${Deno.cwd()}/day-22/sample-input-0.txt`;
            const input = await readPuzzleInput(path);

            expect(input).toEqual([12039, 102, 1, 38758, 462]);
        });
    });

    describe("solvePart1()", () => {
        it("returns for the sample input", async () => {
            const path = `${Deno.cwd()}/day-22/sample-input.txt`;
            const input = await readPuzzleInput(path);
        });
    });

    describe("solvePart2()", () => {
        it("returns the state correctly for the sample input for part 2 with 6 picoseconds allowed", async () => {
            const path = `${Deno.cwd()}/day-22/sample-input.txt`;
            const input = await readPuzzleInput(path);
        });
    });

    describe("mix()", () => {
        it("returns 37 when mixing 15 into the secret number 42", () => {
            expect(mix(42, 15)).toBe(37);
        });
    });

    describe("prune()", () => {
        it("returns 16113920 for the secret number 100000000", () => {
            expect(prune(100000000)).toBe(16113920);
        });
    });
});
