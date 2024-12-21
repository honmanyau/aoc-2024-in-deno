import { describe, it } from "@std/testing/bdd";

import { expect } from "@std/expect/expect";
import {
    findShortestPaths,
    generateDirectionPadPathsMap,
    generateNumberPadPathsMap,
    NUMBER_PAD,
    readPuzzleInput,
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
        it("returns", async () => {
            const path = `${Deno.cwd()}/day-21/sample-input.txt`;
            const input = await readPuzzleInput(path);
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
            const result = findShortestPaths(NUMBER_PAD, "A", "0");

            expect(result).toEqual([["<"].join("")]);
        });

        it(`returns [["<", "^"], ["<", "^"]] the number pad starting at A and ending at 0`, () => {
            const result = findShortestPaths(NUMBER_PAD, "A", "2");

            expect(result).toEqual([["^", "<"].join(""), ["<", "^"].join("")]);
        });

        it(`returns [["^"]] the number pad starting at A and ending at 0`, () => {
            const result = findShortestPaths(NUMBER_PAD, "A", "5");

            expect(result).toEqual([
                ["^", "^", "<"].join(""),
                ["^", "<", "^"].join(""),
                ["<", "^", "^"].join(""),
            ]);
        });

        it(`returns [] the number pad starting at 4 and ending at A`, () => {
            const result = findShortestPaths(NUMBER_PAD, "4", "A");

            expect(result).toEqual([
                ["v", ">", "v", ">"].join(""),
                ["v", ">", ">", "v"].join(""),
                [">", "v", "v", ">"].join(""),
                [">", "v", ">", "v"].join(""),
                [">", ">", "v", "v"].join(""),
            ]);
        });
    });

    describe("generateNumberPadPathsMap()", () => {
        it(`accessing the object returned with the keys "A" and "0" returns ["<"]`, async () => {
            const result = generateNumberPadPathsMap();

            expect(result["A"]["0"]).toEqual(["<"]);
        });

        it(`accessing the object returned with the keys "A" and "2" returns ["^<", "<^"]`, async () => {
            const result = generateNumberPadPathsMap();

            expect(result["A"]["2"]).toEqual(["^<", "<^"]);
        });

        it(`accessing the object returned with the keys "A" and "5" returns ["^^<", "^<^", "<^^"]`, async () => {
            const result = generateNumberPadPathsMap();

            expect(result["A"]["5"]).toEqual(["^^<", "^<^", "<^^"]);
        });
    });

    describe("generateDirectionPadPathsMap()", () => {
        it(`accessing the object returned with the keys "A" and "^" returns ["<"]`, () => {
            const result = generateDirectionPadPathsMap();

            expect(result["A"]["^"]).toEqual(["<"]);
        });

        it(`accessing the object returned with the keys "A" and "v" returns ["<"]`, () => {
            const result = generateDirectionPadPathsMap();

            expect(result["A"]["v"]).toEqual(["<v", "v<"]);
        });
    });
});
