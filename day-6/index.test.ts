import { describe, it } from "@std/testing/bdd";

import { expect } from "@std/expect/expect";
import {
    findStartingPos,
    readPuzzleInput,
    solvePart1,
    step,
    UP,
} from "./index.ts";

describe("Day 6", () => {
    describe("readPuzzleInput()", () => {
        it("returns the map as an array of arrays of string, with each cell representing a grid on the original map", async () => {
            const path = `${Deno.cwd()}/day-6/sample-input.txt`;
            const input = await readPuzzleInput(path);

            expect(input).toEqual([
                [".", ".", ".", ".", "#", ".", ".", ".", ".", "."],
                [".", ".", ".", ".", ".", ".", ".", ".", ".", "#"],
                [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
                [".", ".", "#", ".", ".", ".", ".", ".", ".", "."],
                [".", ".", ".", ".", ".", ".", ".", "#", ".", "."],
                [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
                [".", "#", ".", ".", "^", ".", ".", ".", ".", "."],
                [".", ".", ".", ".", ".", ".", ".", ".", "#", "."],
                ["#", ".", ".", ".", ".", ".", ".", ".", ".", "."],
                [".", ".", ".", ".", ".", ".", "#", ".", ".", "."],
            ]);
        });
    });

    describe("findStartingPos()", () => {
        it("return [0, 0]", () => {
            const input = [
                ["^", "."],
                [".", "."],
            ];
            const result = findStartingPos(input);

            expect(result).toEqual([0, 0]);
        });

        it("return [0, 1]", () => {
            const input = [
                [".", "^"],
                [".", "."],
            ];
            const result = findStartingPos(input);

            expect(result).toEqual([0, 1]);
        });

        it("return [1, 0]", () => {
            const input = [
                [".", "."],
                ["^", "."],
            ];
            const result = findStartingPos(input);

            expect(result).toEqual([1, 0]);
        });

        it("return [1, 1]", () => {
            const input = [
                [".", "."],
                [".", "^"],
            ];
            const result = findStartingPos(input);

            expect(result).toEqual([1, 1]);
        });

        it("return [1, 1]", () => {
            const input = [
                [".", ".", "."],
                [".", "^", "."],
                [".", ".", "."],
            ];
            const result = findStartingPos(input);

            expect(result).toEqual([1, 1]);
        });

        it("returns [6, 4] for the sample input", async () => {
            const path = `${Deno.cwd()}/day-6/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = findStartingPos(input);

            expect(result).toEqual([6, 4]);
        });
    });

    describe("solvePart1()", () => {
        it(`return 1 for the input [
                ["^", "."],
                [".", "."],
            ]`, () => {
            const input = [
                ["^", "."],
                [".", "."],
            ];

            const result = solvePart1(input);

            expect(result).toBe(1);
        });

        it(`return 2 for the input [
            [".", "."],
            ["^", "."],
        ]`, () => {
            const input = [
                [".", "."],
                ["^", "."],
            ];

            const result = solvePart1(input);

            expect(result).toBe(2);
        });

        it(`return 3 for the input [
            [".", ".", "."],
            [".", ".", "."],
            ["^", ".", "."],
        ]`, () => {
            const input = [
                [".", ".", "."],
                [".", ".", "."],
                ["^", ".", "."],
            ];

            const result = solvePart1(input);

            expect(result).toBe(3);
        });

        it(`return 4 for the input [
            ["#", ".", "."],
            [".", ".", "#"],
            ["^", ".", "."],
        ]`, () => {
            const input = [
                ["#", ".", "."],
                [".", ".", "#"],
                ["^", ".", "."],
            ];

            const result = solvePart1(input);

            expect(result).toBe(4);
        });

        it(`return 4 for the input [
            ["#", ".", "."],
            [".", ".", "#"],
            ["^", ".", "."],
        ]`, () => {
            const input = [
                ["#", ".", "."],
                [".", ".", "#"],
                ["^", ".", "."],
            ];

            const result = solvePart1(input);

            expect(result).toBe(4);
        });

        it(`return 3 for the input [
            ["#", ".", "."],
            [".", ".", "#"],
            ["^", "#", "."],
        ]`, () => {
            const input = [
                ["#", ".", "."],
                [".", ".", "#"],
                ["^", "#", "."],
            ];

            const result = solvePart1(input);

            expect(result).toBe(3);
        });

        it(`return 41 for the sample input`, async () => {
            const path = `${Deno.cwd()}/day-6/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart1(input);

            expect(result).toBe(41);
        });
    });

    describe("step()", () => {
        it(`mutates the input correctly and returns [1, 0], [-1, 0] for the input [
            [".", ".", "."],
            [".", ".", "."],
            ["|", ".", "."],
        ]`, () => {
            const input = [
                [".", ".", "."],
                [".", ".", "."],
                ["|", ".", "."],
            ];

            const [position, direction] = step(input, [2, 0], UP) || [];

            expect(input).toEqual([
                [".", ".", "."],
                ["|", ".", "."],
                ["|", ".", "."],
            ]);

            expect(position).toEqual([1, 0]);
            expect(direction).toEqual([-1, 0]);
        });

        it(`mutates the input correctly and returns [0, 0], [-1, 0] for the input [
            [".", ".", "."],
            ["|", ".", "."],
            ["|", ".", "."],
        ]`, () => {
            const input = [
                [".", ".", "."],
                ["|", ".", "."],
                ["|", ".", "."],
            ];

            const [position, direction] = step(input, [1, 0], UP) || [];

            expect(input).toEqual([
                ["|", ".", "."],
                ["|", ".", "."],
                ["|", ".", "."],
            ]);

            expect(position).toEqual([0, 0]);
            expect(direction).toEqual([-1, 0]);
        });

        it(`mutates the input correctly and returns [1, 0], [0, 1] (direction change) for the input [
            ["#", ".", "."],
            ["|", ".", "."],
            ["|", ".", "."],
        ]`, () => {
            const input = [
                ["#", ".", "."],
                ["|", ".", "."],
                ["|", ".", "."],
            ];

            const [position, direction] = step(input, [1, 0], UP) || [];

            expect(input).toEqual([
                ["#", ".", "."],
                ["+", ".", "."],
                ["|", ".", "."],
            ]);

            expect(position).toEqual([1, 0]);
            expect(direction).toEqual([0, 1]);
        });

        it(`mutates the input correctly and returns undefined (stepping over an edge) for the input [
            ["|", ".", "."],
            ["|", ".", "."],
            ["|", ".", "."],
        ]`, () => {
            const input = [
                ["|", ".", "."],
                ["|", ".", "."],
                ["|", ".", "."],
            ];

            const result = step(input, [0, 0], UP);

            expect(input).toEqual([
                ["|", ".", "."],
                ["|", ".", "."],
                ["|", ".", "."],
            ]);

            expect(result).toBe(undefined);
        });
    });
});
