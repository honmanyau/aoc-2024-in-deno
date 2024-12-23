import { describe, it } from "@std/testing/bdd";

import { expect } from "@std/expect/expect";
import { evolve, mix, prune, readPuzzleInput } from "./index.ts";

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

    describe("evolve()", () => {
        it("returns the expected sequence when evolving the secret number 10 times", () => {
            expect(evolve(123)).toBe(15887950);
            expect(evolve(123, 2)).toBe(16495136);
            expect(evolve(123, 3)).toBe(527345);
            expect(evolve(123, 4)).toBe(704524);
            expect(evolve(123, 5)).toBe(1553684);
            expect(evolve(123, 6)).toBe(12683156);
            expect(evolve(123, 7)).toBe(11100544);
            expect(evolve(123, 8)).toBe(12249484);
            expect(evolve(123, 9)).toBe(7753432);
            expect(evolve(123, 10)).toBe(5908254);
        });
    });
});
