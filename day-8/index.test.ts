import { expect } from "@std/expect/expect";
import { describe, it } from "@std/testing/bdd";

import {
    getAntennaPositions,
    readPuzzleInput,
    solvePart1,
    solvePart2,
} from "./index.ts";

describe("Day 8", () => {
    describe("readPuzzleInput()", () => {
        it("returns the puzzle input correctly for `sample-input`", async () => {
            const path = `${Deno.cwd()}/day-8/sample-input.txt`;
            const input = await readPuzzleInput(path);

            expect(input).toEqual([
                "............".split(""),
                "........0...".split(""),
                ".....0......".split(""),
                ".......0....".split(""),
                "....0.......".split(""),
                "......A.....".split(""),
                "............".split(""),
                "............".split(""),
                "........A...".split(""),
                ".........A..".split(""),
                "............".split(""),
                "............".split(""),
            ]);
        });
    });

    describe("getAntennasPositions()", () => {
        it(`returns { "A": [[0, 0]] ) for the input [["A", "."]]`, () => {
            const input = [["A", "."]];
            const antennaPositions = getAntennaPositions(input);

            expect(antennaPositions).toEqual({ A: [[0, 0]] });
        });

        it(`returns { "A": [[0, 0], [1, 1]] ) for the input [["A", "."], [".", "A"]]`, () => {
            const input = [
                ["A", "."],
                [".", "A"],
            ];
            const antennaPositions = getAntennaPositions(input);

            expect(antennaPositions).toEqual({
                A: [
                    [0, 0],
                    [1, 1],
                ],
            });
        });

        it(`returns { "A": [[0, 0], [1, 1]], 0: [[0, 1]] ) for the input [["A", "0"], [".", "A"]]`, () => {
            const input = [
                ["A", "0"],
                [".", "A"],
            ];
            const antennaPositions = getAntennaPositions(input);

            expect(antennaPositions).toEqual({
                A: [
                    [0, 0],
                    [1, 1],
                ],
                0: [[0, 1]],
            });
        });
    });

    describe("solvePart1()", () => {
        it("returns 14 for the sample input", async () => {
            const path = `${Deno.cwd()}/day-8/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart1(input);

            expect(result).toBe(14);
        });

        it("returns 2 for the second sample input", async () => {
            const path = `${Deno.cwd()}/day-8/sample-input-2.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart1(input);

            expect(result).toBe(2);
        });

        it("returns 4 for the third sample input", async () => {
            const path = `${Deno.cwd()}/day-8/sample-input-3.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart1(input);

            expect(result).toBe(4);
        });

        it("returns 4 for the fourth sample input", async () => {
            const path = `${Deno.cwd()}/day-8/sample-input-4.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart1(input);

            expect(result).toBe(4);
        });
    });

    describe("solvePart2()", () => {
        it("returns 34 for the sample input", async () => {
            const path = `${Deno.cwd()}/day-8/sample-input.txt`;
            const input = await readPuzzleInput(path);

            const result = solvePart2(input);

            expect(result).toBe(34);
        });

        it("returns 9 for the fifth sample input", async () => {
            const path = `${Deno.cwd()}/day-8/sample-input-5.txt`;
            const input = await readPuzzleInput(path);

            const result = solvePart2(input);

            expect(result).toBe(9);
        });
    });
});
