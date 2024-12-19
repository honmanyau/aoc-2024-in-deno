import { describe, it } from "@std/testing/bdd";

import { expect } from "@std/expect/expect";
import {
    buildTowel,
    findValidStartingColors,
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

    describe("solvePart2()", () => {
        it("returns 16 for the sample input", async () => {
            const path = `${Deno.cwd()}/day-19/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart2(input);

            expect(result).toEqual(16);
        });

        it("returns 14 for the sample when the first towel is removed", async () => {
            const path = `${Deno.cwd()}/day-19/sample-input.txt`;
            const input = await readPuzzleInput(path);

            input[1].shift();

            const result = solvePart2(input);

            expect(result).toEqual(14);
        });

        it("returns 13 for the sample when the first two towels are removed", async () => {
            const path = `${Deno.cwd()}/day-19/sample-input.txt`;
            const input = await readPuzzleInput(path);

            input[1].splice(0, 2);

            const result = solvePart2(input);

            expect(result).toEqual(13);
        });

        it("returns 9 for the sample when the first three towels are removed", async () => {
            const path = `${Deno.cwd()}/day-19/sample-input.txt`;
            const input = await readPuzzleInput(path);

            input[1].splice(0, 3);

            const result = solvePart2(input);

            expect(result).toEqual(9);
        });

        it("returns 3 for the sample when the first four towels are removed", async () => {
            const path = `${Deno.cwd()}/day-19/sample-input.txt`;
            const input = await readPuzzleInput(path);

            input[1].splice(0, 4);

            const result = solvePart2(input);

            expect(result).toEqual(3);
        });
    });
});
