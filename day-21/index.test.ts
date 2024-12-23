import { describe, it } from "@std/testing/bdd";

import { expect } from "@std/expect/expect";
import {
    dfs,
    findShortestPaths,
    readPuzzleInput,
    solvePart1,
} from "./index.ts";

describe("Day 21", () => {
    describe("readPuzzleInput()", () => {
        it("returns the puzzle input correctly for the first sample input", async () => {
            const path = `${Deno.cwd()}/day-21/sample-input-0.txt`;
            const input = await readPuzzleInput(path);

            expect(input).toEqual(["042A", "123A", "999A", "101A", "024A"]);
        });
    });

    describe("solvePart1()", () => {
        it("returns for the sample input", async () => {
            const path = `${Deno.cwd()}/day-21/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart1(input);

            expect(result).toBe(126384);
        });
    });

    describe("solvePart2()", () => {
        it("returns the state correctly for the sample input for part 2 with 6 picoseconds allowed", async () => {
            const path = `${Deno.cwd()}/day-21/sample-input.txt`;
            const input = await readPuzzleInput(path);
        });
    });

    describe("findShortestPaths()", () => {
        it(`returns [["<"]] the number pad starting at A and ending at 0`, () => {
            const result = findShortestPaths("A", "0");

            expect(result).toEqual([["<"].join("")]);
        });

        it(`returns [["<", "^"], ["<", "^"]] the number pad starting at A and ending at 0`, () => {
            const result = findShortestPaths("A", "2");

            expect(result).toEqual([["^", "<"].join(""), ["<", "^"].join("")]);
        });

        it(`returns [["^"]] the number pad starting at A and ending at 0`, () => {
            const result = findShortestPaths("A", "5");

            expect(result).toEqual([
                ["^", "^", "<"].join(""),
                ["^", "<", "^"].join(""),
                ["<", "^", "^"].join(""),
            ]);
        });

        it(`returns [] the number pad starting at 4 and ending at A`, () => {
            const result = findShortestPaths("4", "A");

            expect(result).toEqual([
                ["v", ">", "v", ">"].join(""),
                ["v", ">", ">", "v"].join(""),
                [">", "v", "v", ">"].join(""),
                [">", "v", ">", "v"].join(""),
                [">", ">", "v", "v"].join(""),
            ]);
        });
    });

    describe("dfs()", () => {
        it(`returns the correct sequences for the code 029A and subsequent sequences using directional keypads`, async () => {
            const codes = [
                "029A",
                "980A",
                "179A",
                "456A",
                "379A",
                "805A",
                "983A",
                "149A",
                "413A",
                "582A",
            ];
            const expectedResults = [68, 60, 68, 64, 64, 72, 66, 76, 70, 68];

            expect(codes.map((code) => dfs(code, 0, 3))).toEqual(
                expectedResults
            );
        });
    });
});
