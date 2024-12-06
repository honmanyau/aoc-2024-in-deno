import { describe, it } from "@std/testing/bdd";

import { expect } from "@std/expect/expect";
import { findStartingPos, readPuzzleInput } from "./index.ts";

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
});
