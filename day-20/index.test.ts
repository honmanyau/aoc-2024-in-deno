import { expect } from "@std/expect/expect";
import { describe, it } from "@std/testing/bdd";

import {
    generateTrackData,
    readPuzzleInput,
    solvePart1,
    walk,
} from "./index.ts";

describe("Day 20", () => {
    describe("readPuzzleInput()", () => {
        it("returns the puzzle input correctly for the first sample input", async () => {
            const path = `${Deno.cwd()}/day-20/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const fourthLine = input[3];
            const secondLastLine = input[input.length - 3];

            expect(fourthLine).toEqual("#S#...#.#.#...#".split(""));
            expect(secondLastLine).toEqual("#...#...#...###".split(""));
        });
    });

    describe("generateTrackData()", () => {
        it("returns the track data correctly for the first sample input", async () => {
            const path = `${Deno.cwd()}/day-20/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const trackData = generateTrackData(input);

            expect(trackData["3,1"]).toEqual({
                direction: [-1, 0],
                picosecondsFromEnd: 84,
            });

            expect(trackData["2,1"]).toEqual({
                direction: [-1, 0],
                picosecondsFromEnd: 83,
            });

            expect(trackData["1,1"]).toEqual({
                direction: [0, 1],
                picosecondsFromEnd: 82,
            });

            expect(trackData["1,2"]).toEqual({
                direction: [0, 1],
                picosecondsFromEnd: 81,
            });

            expect(trackData["1,3"]).toEqual({
                direction: [1, 0],
                picosecondsFromEnd: 80,
            });

            expect(trackData["7,3"]).toEqual({
                direction: [0, 1],
                picosecondsFromEnd: 2,
            });

            expect(trackData["7,4"]).toEqual({
                direction: [0, 1],
                picosecondsFromEnd: 1,
            });

            expect(trackData["7,5"]).toEqual({
                direction: [0, 0],
                picosecondsFromEnd: 0,
            });
        });
    });

    describe("walk()", () => {
        it("returns the state correctly for the first sample input", async () => {
            const path = `${Deno.cwd()}/day-20/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = walk(input);

            expect(result).toEqual({
                "2": 14,
                "4": 14,
                "6": 2,
                "8": 4,
                "10": 2,
                "12": 3,
                "20": 1,
                "36": 1,
                "38": 1,
                "40": 1,
                "64": 1,
            });
        });
    });

    describe("solvePart1()", () => {
        it("returns", async () => {
            const path = `${Deno.cwd()}/day-20/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart1(input);
        });
    });

    describe("solvePart2()", () => {
        it("returns 16 for the sample input", async () => {
            const path = `${Deno.cwd()}/day-20/sample-input.txt`;
            const input = await readPuzzleInput(path);
        });
    });
});
