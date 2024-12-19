import { describe, it } from "@std/testing/bdd";

import { expect } from "@std/expect/expect";
import {
    buildTowel,
    findValidStartingColors,
    getNumberOfCombinations,
    readPuzzleInput,
    solvePart1,
    solvePart2,
} from "./index.ts";

describe("Day 19", () => {
    describe("readPuzzleInput()", () => {
        it("returns the puzzle input correctly for the first sample input", async () => {
            const path = `${Deno.cwd()}/day-19/sample-input-0.txt`;
            const input = await readPuzzleInput(path);

            expect(input).toEqual([
                { r: true, wr: true, br: true },
                ["brwrr", "bggr"],
            ]);
        });
    });

    describe("buildTowel()", () => {
        it("returns [ 'b', 'r', 'wr', 'r' ] and [ 'br', 'wr', 'r' ] for the first towel in the sample input", async () => {
            const path = `${Deno.cwd()}/day-19/sample-input.txt`;
            const [colors, towels] = await readPuzzleInput(path);
            const result = buildTowel(colors, towels[0]);

            expect(result).toEqual([
                ["br", "wr", "r"],
                ["b", "r", "wr", "r"],
            ]);
        });

        it("returns [ 'b', 'g', 'g', 'r' ] for the second towel in the sample input", async () => {
            const path = `${Deno.cwd()}/day-19/sample-input.txt`;
            const [colors, towels] = await readPuzzleInput(path);
            const result = buildTowel(colors, towels[1]);

            expect(result).toEqual([["b", "g", "g", "r"]]);
        });

        it("returns the expected combinations for the third towel in the sample input", async () => {
            const path = `${Deno.cwd()}/day-19/sample-input.txt`;
            const [colors, towels] = await readPuzzleInput(path);
            const result = buildTowel(colors, towels[2]);

            expect(result).toEqual([
                ["gb", "br"],
                ["g", "b", "br"],
                ["gb", "b", "r"],
                ["g", "b", "b", "r"],
            ]);
        });
    });

    describe("findValidStartingColors()", () => {
        it("returns ['r', 'rb'] for the string 'rbgbr' using the colours in the sample input", async () => {
            const path = `${Deno.cwd()}/day-19/sample-input.txt`;
            const [colors] = await readPuzzleInput(path);
            const result = findValidStartingColors(colors, "rbgbr");

            expect(result).toEqual(["r", "rb"]);
        });

        it("returns ['b'] for the string 'bgbr' using the colours in the sample input", async () => {
            const path = `${Deno.cwd()}/day-19/sample-input.txt`;
            const [colors] = await readPuzzleInput(path);
            const result = findValidStartingColors(colors, "bgbr");

            expect(result).toEqual(["b"]);
        });

        it("returns ['g', 'gb'] for the string 'gbr' using the colours in the sample input", async () => {
            const path = `${Deno.cwd()}/day-19/sample-input.txt`;
            const [colors] = await readPuzzleInput(path);
            const result = findValidStartingColors(colors, "gbr");

            expect(result).toEqual(["g", "gb"]);
        });
    });

    describe("solvePart1()", () => {
        it("returns", async () => {
            const path = `${Deno.cwd()}/day-19/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart1(input);

            expect(result).toEqual(6);
        });
    });

    describe("getNumberOfCombinations()", () => {
        it("returns 2 for the first towel of the sample input", async () => {
            const path = `${Deno.cwd()}/day-19/sample-input.txt`;
            const [colors, towels] = await readPuzzleInput(path);
            const result = getNumberOfCombinations(colors, towels[0]);

            expect(result).toEqual(2);
        });

        it("returns 1 for the second towel of the sample input", async () => {
            const path = `${Deno.cwd()}/day-19/sample-input.txt`;
            const [colors, towels] = await readPuzzleInput(path);
            const result = getNumberOfCombinations(colors, towels[1]);

            expect(result).toEqual(1);
        });

        it("returns 4 for the third towel of the sample input", async () => {
            const path = `${Deno.cwd()}/day-19/sample-input.txt`;
            const [colors, towels] = await readPuzzleInput(path);
            const result = getNumberOfCombinations(colors, towels[2]);

            expect(result).toEqual(4);
        });

        it("returns 6 for the foruth towel of the sample input", async () => {
            const path = `${Deno.cwd()}/day-19/sample-input.txt`;
            const [colors, towels] = await readPuzzleInput(path);
            const result = getNumberOfCombinations(colors, towels[3]);

            expect(result).toEqual(6);
        });

        it("returns 0 for the fifth towel of the sample input", async () => {
            const path = `${Deno.cwd()}/day-19/sample-input.txt`;
            const [colors, towels] = await readPuzzleInput(path);
            const result = getNumberOfCombinations(colors, towels[4]);

            expect(result).toEqual(0);
        });

        it("returns 1 for the sixth towel of the sample input", async () => {
            const path = `${Deno.cwd()}/day-19/sample-input.txt`;
            const [colors, towels] = await readPuzzleInput(path);
            const result = getNumberOfCombinations(colors, towels[5]);

            expect(result).toEqual(1);
        });

        it("returns 2 for the seventh towel of the sample input", async () => {
            const path = `${Deno.cwd()}/day-19/sample-input.txt`;
            const [colors, towels] = await readPuzzleInput(path);
            const result = getNumberOfCombinations(colors, towels[6]);

            expect(result).toEqual(2);
        });

        it("returns 0 for the eighth towel of the sample input", async () => {
            const path = `${Deno.cwd()}/day-19/sample-input.txt`;
            const [colors, towels] = await readPuzzleInput(path);
            const result = getNumberOfCombinations(colors, towels[7]);

            expect(result).toEqual(0);
        });
    });

    describe("solvePart2()", () => {
        it("returns 16 for the sample input", async () => {
            const path = `${Deno.cwd()}/day-19/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart2(input);

            expect(result).toEqual(16);
        });
    });
});
